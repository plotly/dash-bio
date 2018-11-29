import base64
import json
import jsonschema
import urllib.error
import urllib.request
import requests
import pandas as pd
import numpy as np
import warnings
import copy


EMPTY_MUT_DATA = dict(
    x=[],
    y=[],
    mutationGroups=[],
    domains=[],
)

ARR_SCHEMA = {
    "type": "array",
    "items": {"type": ["string", "number"]}
}

PROT_DOM_SCHEMA = {
    "type": "array",
    "contains": {
        "type": "object",
        "properties": {
            "name": {"type": "string"},
            "coord": {"type": "string"},
        }
    }
}

MUT_DATA_SCHEMA = {
    "type": "object",
    "properties": {
        "x": ARR_SCHEMA,
        "y": ARR_SCHEMA,
        "mutationGroups": ARR_SCHEMA,
        "domains": PROT_DOM_SCHEMA,
    },
    "required": ['x'],
}


def extract_mutations(target_url, fname=""):
    """read mutations json file for the default app values
        the file should contain a list of structure with label
        'coord', 'value' and 'category' corresponding to the
        position of the mutation of the gene, the number of mutations
        and the type of mutation, respectively
    """
    recieved_data = False
    try:
        with urllib.request.urlopen(target_url + fname) as url:
            data = json.loads(url.read())
        recieved_data = True
    except json.decoder.JSONDecodeError:
        warnings.warn('problem with the data format, not a JSON file')
    except urllib.error.HTTPError:
        warnings.warn("Error 404 : check your url or your internet connexion : %s" % (target_url + fname))

    x = []
    y = []
    mutationgroup = []
    if recieved_data:
        for data_item in data:
            x.append(data_item['coord'])
            y.append(data_item['value'])
            mutationgroup.append(data_item['category'])
    return x, y, mutationgroup


def extract_domains(target_url, fname=""):
    """read protein domain json file for the default app value
        the file should contain a list of structure with label
        'coord' and 'name' corresponding to the coordinate of the
        domain of the gene (in the format "START-END") and its name,
        respectively
    """
    domains = []
    try:
        with urllib.request.urlopen(target_url + fname) as url:
            domains = json.loads(url.read())
    except json.decoder.JSONDecodeError:
        warnings.warn('problem with the data format, not a JSON file')
    except urllib.error.HTTPError:
        warnings.warn("Error 404 : check your url or your internet connexion : %s" % (target_url + fname))

    return domains


class UniprotQueryBuilder(object):
    """class which handles the query of gff files from the UniProt database
        build following https://www.uniprot.org/help/api_queries
    """
    def __init__(self):
        self._base_url = "https://www.uniprot.org/uniprot/"
        self._base_query = "?query=%s"
        self._field_separator = "+AND+"
        self._parameter_separator = "&"
        # https://www.uniprot.org/help/api_queries
        self._query_parameters = {
            "format": [
                "html",
                "tab",
                "xls",
                "fasta",
                "gff",
                "txt",
                "xml",
                "rdf",
                "list",
                "rss",
            ],
            "columns": [
                "citation",
                "clusters",
                "comments",
                "domains",
                "domain",
                "ec",
                "id",
                "entry name",
                "existence",
                "families",
                "features",
                "genes",
                "go",
                "go-id",
                "interactor",
                "keywords",
                "last-modified",
                "length",
                "organism",
                "organism-id",
                "pathway",
                "protein names",
                "reviewed",
                "sequence",
                "3d",
                "version",
                "virus hosts",
            ],
            "sort": ['score'],
            "include": ["yes", "no"],
            "compress": ["yes", "no"],
            "limit": 'int',
            "offset": 'int',
        }
        # https://www.uniprot.org/help/query-fields
        self._query_fields = [
            "accession",
            "active",
            "annotation",
            "author",
            "cdantigen",
            "citation",
            "cluster",
            "count",
            "created",
            "database",
            "ec",
            "evidence",
            "existence",
            "family",
            "fragment",
            "gene",
            "gene_exact",
            "goa",
            "host",
            "id",
            "inn",
            "interactor",
            "keyword",
            "length",
            "lineage",
            "mass",
            "method",
            "mnemonic",
            "modified",
            "name",
            "organelle",
            "organism",
            "plasmid",
            "proteome",
            "proteomecomponent",
            "replaces",
            "reviewed",
            "scope",
            "sequence",
            "sequence_modified",
            "source",
            "strain",
            "taxonomy",
            "tissue",
            "web",
        ]

    def _validate_query_parameters(self, parameters=None):
        """compare the parameters with the allowed values and keys"""
        if parameters is None:
            parameters = {}

        validated_parameters = {}  # dictionary to return

        for key in parameters:
            if key in self._query_parameters:
                if key in ['limit', 'offset']:
                    if isinstance(parameters[key], int):
                        validated_parameters[key] = "%i" % parameters[key]
                elif key == 'format':
                    if parameters[key] in self._query_parameters[key]:
                        validated_parameters[key] = parameters[key]
                elif key == 'columns':
                    # replace '+' by a space and separate the commas
                    column_entry = parameters[key].replace('+', ' ').split(',')

                    set_a = set(self._query_parameters[key])
                    set_b = set(column_entry)
                    validated_items = set_a.intersection(set_b)  # disordered set
                    validated_column_entry = []  # ordered list
                    for item in column_entry:
                        # reorder the set in a list to keep the same order as the entry
                        if item in validated_items:
                            validated_column_entry.append(item)
                    validated_parameters[key] = ",".join(validated_column_entry).replace(' ', '+')
                elif key in ['include', 'compress', 'sort']:
                    if parameters[key] in self._query_parameters[key]:
                        validated_parameters[key] = parameters[key]

        return validated_parameters

    def build_query(self, query, fields=None, parameters=None):
        """
        param (str) query : the name of the sequence on UnitProt or an entry
                            respecting https://www.uniprot.org/help/text-search
        param (dict) fields : see https://www.uniprot.org/help/query-fields
            default = {}
        param (dict) parameters : see https://www.uniprot.org/help/api_queries
            default = {}
        """
        if fields is None:
            fields = {}
        if parameters is None:
            parameters = {}

        url = self._base_url + self._base_query % query

        for key in fields:
            if key in self._query_fields:
                if isinstance(fields[key], str):
                    url = url + self._field_separator + key + ":" + fields[key]
                else:
                    raise ValueError(
                        "The value of the field %s is not a string format, please "
                        "refer to https://www.uniprot.org/help/query-fields")

        validated_parameters = self._validate_query_parameters(parameters)
        for key in validated_parameters:
            url = url + self._parameter_separator + key + "=" + validated_parameters[key]
        return url

    def query_into_file(self, query, fname="", fields=None, parameters=None):
        """saves the result of a query into a file"""
        target_url = self.build_query(query, fields=fields, parameters=parameters)

        with urllib.request.urlopen(target_url) as url:
            content = url.read()

            ofs = open(fname, 'wb')
            ofs.write(content)
            ofs.close()

    def query_into_pandas(self, query, fields=None, parameters=None, names=None):
        """returns the result of a query as a Pandas DataFrame"""
        target_url = self.build_query(query, fields=fields, parameters=parameters)

        col_id = 'columns'
        col_names = None
        if names is None:
            # If the columns of the query are specified (used for 'tab' or 'txt' value of
            # parameters['format'] only), then we use the same for the DataFrame
            if col_id in parameters:
                col_names = parameters[col_id].split(',')
        else:
            col_names = names

        db = pd.read_csv(
            target_url,
            delimiter="\t",
            skiprows=1,
            header=None,
            names=col_names
        )
        return db


def parse_mutations_uniprot_data(gff_data, start='start', stop='end', mut_types_to_skip=None):
    """parse a gff file downloaded into a pandas DataFrame from Uniprot
    :param gff_data: pandas DataFrame
    :param start: the name of the column containing the start coordinate of the mutation
    :param stop: the name of the column containing the start coordinate of the mutation
    :param mut_types_to_skip: a list of mutations types to skip
    :return: formatted mutation data for the dash_bio.NeedlePlot component
    """
    if mut_types_to_skip is None:
        mut_types_to_skip = [
            'Chain',  # This is the whole protein
            'Region',  # Those are better described in pfam database
        ]

    if 'Chain' not in mut_types_to_skip:
        mut_types_to_skip.append('Chain')

    # Selects the various mutations types in the dataset, except types contained in the above list
    mut_types = gff_data['mut'].loc[~gff_data['mut'].isin(mut_types_to_skip)].value_counts().index

    x = np.array([]).astype('str')
    y = np.array([]).astype('str')
    mutationgroups = np.array([]).astype('str')

    for mut_type in mut_types:

        # Selects the start and end protein coordinates of the mutation
        data_coord = gff_data[gff_data.mut == mut_type][[start, stop]]

        # Sort between the single and multi-site coordinates
        single_sites = data_coord.loc[data_coord[start] == data_coord[stop]]
        multi_sites = data_coord.loc[data_coord[start] != data_coord[stop]]

        # Joins the start and end coordinates into one string
        multi_sites['sep'] = "-"
        multi_sites[start] = \
            multi_sites[start].map(str) \
            + multi_sites['sep'] \
            + multi_sites[stop].map(str)

        # Merge the single and multi-site coordinates in one columns and counts the occurrences
        sorted_data = single_sites[start].append(multi_sites[start]).value_counts()
        n = (len(sorted_data.index))

        x = np.append(x, np.array(sorted_data.index).astype('str'))
        y = np.append(y, np.array(sorted_data.values).astype('str'))
        mutationgroups = np.append(mutationgroups, np.repeat(mut_type, n))

    formatted_data = dict(
        x=x.tolist(),
        y=y.tolist(),
        mutationGroups=mutationgroups.tolist(),
        domains=[],
    )
    jsonschema.validate(formatted_data, MUT_DATA_SCHEMA)
    return formatted_data


def pfam_parser(accession):
    """probe http://pfam.xfam.org/protein/%s/graphic
    :param (str) accession: the mutation accession number
    :return: JSON structure with protein domain information
    """
    r = requests.get("http://pfam.xfam.org/protein/%s/graphic" % accession)
    try:
        return r.json()[0]
    except json.decoder.JSONDecodeError:
        return {'regions': []}


def parse_protein_domains_data(domain_data):
    """take a json object loaded from a local file or from the PFAM database and
            format it for the app.
        :param (str) domain_data: json object. It needs to have a structure with a
                                 'region' field under which 'text', 'start' and 'end'
                                 fields must be present as well.
        :return: JSON-like structure with protein domain information formatted for dash_bio
        needle plot component
        """
    region_key = 'regions'
    region_name_key = 'text'
    region_start_key = 'start'
    region_stop_key = 'end'

    formatted_data = []

    for region in domain_data[region_key]:
        formatted_data.append(
            dict(
                name="%s" % region[region_name_key],
                coord="%i-%i" % (region[region_start_key], region[region_stop_key])
            )
        )

    return formatted_data


def load_protein_domains(accession=None, json_fname=None):
    """take a json file from a local file or from the PFAM database and
        format it for the app.
    :param (str) json_fname: name of a JSON file. This JSON file needs to
                             have a structure with a 'region' field under
                             which 'text', 'start' and 'end' fields must
                             be present as well.
    :param (str) accession: the mutation accession number
    :return: JSON structure with protein domain information formatted for dash_bio
    needle plot component

    In case both argument have non-None values, the data from PFAM website will
    be chosen over the one of the JSON file.
    """
    if json_fname is not None:
        with open(json_fname) as f:
            domain_data = json.load(f)

    if accession is not None:
        domain_data = pfam_parser(accession)

    return parse_protein_domains_data(domain_data)


def decode_dcc_upload_contents(contents, encoding='utf-8'):
    """ decodes the content returned by a dcc.Upload component's callback
    :param contents: a string with a comma separating the content type and the
                     encoded content
    :param encoding: the encoding convention of the encoded content
    :return: decoded string
    """
    decoded = ""
    if contents is not None:
        content_type, content_string = contents.split(',')
        decoded = base64.b64decode(content_string)
        decoded = decoded.decode(encoding)
    return decoded


def parse_mutation_upload_file(contents, fname):
    """
    :param (str) contents: returned by a dcc.Upload 'contents' prop
    :param (str) fname: the filename associated with the dcc.Upload component
    :return: formatted mutation data for the dash_bio.NeedlePlot component
    """
    data = copy.deepcopy(EMPTY_MUT_DATA)
    upload_data = decode_dcc_upload_contents(contents)

    if upload_data:
        if fname.endswith('json'):
            # Assume that the user uploaded a json file
            json_data = json.loads(upload_data)
            jsonschema.validate(json_data, MUT_DATA_SCHEMA)
            for k in data:
                data[k] = json_data[k]

    return data


def parse_domain_upload_file(contents, fname):
    """
    :param (str) contents: returned by a dcc.Upload 'contents' prop
    :param (str) fname: the filename associated with the dcc.Upload component
    :return: formatted protein domain data for the dash_bio.NeedlePlot component
    """
    data = []
    upload_data = decode_dcc_upload_contents(contents)

    if upload_data:
        if fname.endswith('json'):
            # Assumes that the user uploaded a json file
            json_data = json.loads(upload_data)
            data = parse_protein_domains_data(json_data[0])

    return data

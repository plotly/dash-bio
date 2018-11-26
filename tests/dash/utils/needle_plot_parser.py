import json
import urllib.request
import requests
import pandas as pd
import warnings


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
        )

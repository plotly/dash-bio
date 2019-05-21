"""Mutation data parser

This module contains functions that can take files from the Uniprot
database and parse the information into JSON format."""

import base64
import json
import copy

import jsonschema
import numpy as np

from dash_bio_utils.uniprot_database_tools import pfam_domain_parser

EMPTY_MUT_DATA = dict(
    x=[],
    y=[],
    mutationGroups=[],
    domains=[],
)

PFAM_DOM_SCHEMA = {
    "type": "array",
    "items": {
        "type": "object",
        "properties": {
            "region": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "text": {"type": "string"},
                        "start": {"type": "string"},
                        "end": {"type": "string"},
                    },
                    "required": ["text", "start", "end"]
                }
            },
        },
        "required": ["regions"]
    }
}

PROT_DOM_SCHEMA = {
    "type": "array",
    "items": {
        "type": "object",
        "properties": {
            "name": {"type": "string"},
            "coord": {"type": "string"},
        },
        "required": ["name", "coord"]
    }
}

ARR_SCHEMA = {
    "type": "array",
    "items": {"type": ["string", "number"]}
}

MUT_DATA_SCHEMA = {
    "type": "object",
    "properties": {
        "x": ARR_SCHEMA,
        "y": ARR_SCHEMA,
        "mutationGroups": ARR_SCHEMA,
        "domains": PROT_DOM_SCHEMA,
    },
    "required": ["x"],
}


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

    try:
        jsonschema.validate(domain_data, PFAM_DOM_SCHEMA)
        is_pfam = True
        domain_data = domain_data[0]
        for region in domain_data[region_key]:
            formatted_data.append(
                dict(
                    name="%s" % region[region_name_key],
                    coord="%i-%i" % (region[region_start_key], region[region_stop_key])
                )
            )

    except jsonschema.exceptions.ValidationError:
        is_pfam = False

    if not is_pfam:
        try:
            jsonschema.validate(domain_data, PROT_DOM_SCHEMA)
            formatted_data = domain_data
        except jsonschema.exceptions.ValidationError:
            print("Your .json file did not match the scheme from PFAM or needleplot domain data")

    return formatted_data


def parse_mutation_data(mutation_data):
    """take a json object and extract the mutation data based one the schema EMPTY_MUT_DATA
    :param (dict) mutation_data:
    :return: formatted mutation data for the dash_bio.NeedlePlot component
    """
    data = copy.deepcopy(EMPTY_MUT_DATA)
    jsonschema.validate(mutation_data, MUT_DATA_SCHEMA)
    for k in data:
        data[k] = mutation_data[k]

    return data


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
        domain_data = pfam_domain_parser(accession)

    return parse_protein_domains_data(domain_data)


def load_mutation_data(json_fname=None):
    """take a json object and extract the mutation data based one the schema EMPTY_MUT_DATA
    :param (str) json_fname: name of a JSON file. This JSON file needs to
                             have a structure like EMPTY_MUT_DATA
    :return: formatted mutation data for the dash_bio.NeedlePlot component
    """
    if json_fname is not None:
        with open(json_fname) as f:
            mutation_data = json.load(f)

    return parse_mutation_data(mutation_data)


def decode_dcc_upload_contents(contents, encoding='utf-8'):
    """ decodes the content returned by a dcc.Upload component's callback
    :param contents: a string with a comma separating the content type and the
                     encoded content
    :param encoding: the encoding convention of the encoded content
    :return: decoded string
    """
    decoded = ""
    if contents is not None:
        _, content_string = contents.split(',')
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
            data = parse_mutation_data(json_data)

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
            data = parse_protein_domains_data(json_data)

    return data

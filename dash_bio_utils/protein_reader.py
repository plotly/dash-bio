"""Protein reader

This module includes functions that extract data from FASTA files into
dictionaries.

Attributes: _DATABASES (dict): A dictionary that translates the
    database sepecified in the description line of the FASTA file to
    its constituent metadata fields."""

import tempfile
import re
from Bio import SeqIO

# information on database header formats, taken from
# https://en.wikipedia.org/wiki/FASTA_format
_DATABASES = {
    'gb': ['accession', 'locus'],
    'emb': ['accession', 'locus'],
    'dbj': ['accession', 'locus'],
    'pir': ['entry'],
    'prf': ['name'],
    'sp': ['accession', 'entry name', 'protein name', 'organism name',
           'organism identifier', 'gene name', 'protein existence',
           'sequence version'],
    'tr': ['accession', 'entry name', 'protein name', 'organism name',
           'organism identifier', 'gene name', 'protein existence',
           'sequence version'],
    'pdb': ['entry', 'chain'],
    'pat': ['country', 'number'],
    'bbs': ['number'],
    'gnl': ['database', 'identifier'],
    'ref': ['accession', 'locus'],
    'lcl': ['identifier'],
    'nxp': ['identifier', 'gene name', 'protein name', 'isoform name']
}


def read_fasta(datapath_or_datastring,
               is_datafile=True):
    """
    Read a file in FASTA format, either from a file or from a string of raw
    data.

    :param (string) datapath_or_datastring: Either the path to the FASTA file (can be relative
                                            or absolute), or a string corresponding to the content
                                            of a FASTA file (including newline characters).
    :param (bool, optional) is_datafile: Either True (default) if passing the filepath to the data,
                                         or False if passing a string of raw data.

    :rtype (list[dict]): A list of protein objects, each containing a
                         description (based on the header line) and the amino
                         acid sequence with, optionally, all non-amino-acid
                         letters removed.
    """

    # ensure required argument is a string
    err_msg = 'Please pass either the filepath to the data, or the data as a string.'
    assert isinstance(datapath_or_datastring, str), err_msg

    raw_data = []

    # open file if given a path
    if is_datafile:
        with open(datapath_or_datastring, 'r') as f:
            lines = f.readlines()
            if '>' not in lines[0]:
                raw_data = ['>']
            raw_data += lines

    # or read the raw string
    else:
        lines = datapath_or_datastring.split('\n')
        if '>' not in lines[0]:
            raw_data = ['>']
        raw_data += lines

    with tempfile.NamedTemporaryFile(mode='w+', delete=False) as tf:
        tf.write('\n'.join(raw_data))

    records = list(SeqIO.parse(tf.name, 'fasta'))

    fasta_data = [
        {'description': decode_description(r.description),
         'sequence': str(r.seq)}
        for r in records]

    return fasta_data


def decode_description(description):
    """
    Parse the first line of a FASTA file using the specifications of
    several different database headers (in _DATABASES).

    :param (string) description: The header line with the initial '>'
                                 removed.
    :rtype (dict): A dictionary for which each key-value pair comprises
                   a property specified by the database used and the
                   value of that property given by the header. If the
                   database is not recognized, the keys are given as
                   'desc-n' where n is the position of the property.
    """
    if not description:
        return {'-1': 'no description'}

    decoded = {}

    desc = description.split('|')
    if desc[0] in _DATABASES:
        db_info = _DATABASES[desc[0]]
        if desc[0] in ['sp', 'tr']:
            decoded['accession'] = desc[1]
            # using regex to get the other information
            rs = re.search(
                r'([^\s]+)(.*)\ OS=(.*)\ OX=(.*)\ GN=(.*)\ PE=(.*)\ SV=(.*)$',
                string=desc[2]
            )
            for i in range(2, len(db_info)):
                decoded[db_info[i]] = rs.group(i)
        else:
            # shift by one, since first section in header describes
            # the database
            for i in range(len(desc)-1):
                decoded[db_info[i]] = desc[i+1]
    else:
        if len(desc) > 1:
            for i in range(len(desc)-1):
                decoded[str(i)] = desc[i+1]
        else:
            decoded['Header'] = desc[0]
    return decoded

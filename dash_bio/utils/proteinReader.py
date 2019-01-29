import tempfile
import re
from Bio import SeqIO

# information on database header formats, taken from
# https://en.wikipedia.org/wiki/FASTA_format
_databases = {
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


def read_fasta(
        file_path='',
        data_string='',
):
    """
    Read a file in FASTA format, either from a file or from a string of raw
    data.

    :param (string) file_path: The full path to the FASTA file (can be relative
                              or absolute).
    :param (string) data_string: A string corresponding to the FASTA file
                                (including newline characters).

    :rtype (list[dict]): A list of protein objects, each containing a
                         description (based on the header line) and the amino
                         acid sequence with, optionally, all non-amino-acid
                         letters removed.
    """

    # ensure we are only given one file specification
    if len(file_path) > 0 and len(data_string) > 0:
        raise Exception(
            "Please specify either a file path or a \
            string of data."
        )

    raw_data = []

    # open file if given a path
    if len(file_path) > 0:
        with open(file_path, 'r') as f:
            lines = f.readlines()
            if '>' not in lines[0]:
                raw_data = ['>']
            raw_data += lines

    # or read the raw string
    else:
        lines = data_string.split('\n')
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
    several different database headers (in _databases).

    :param (string) description: The header line with the initial '>'
                                 removed.
    :rtype (dict): A dictionary for which each key-value pair comprises
                   a property specified by the database used and the
                   value of that property given by the header. If the
                   database is not recognized, the keys are given as
                   'desc-n' where n is the position of the property.
    """
    if len(description) == 0:
        return {'-1': 'no description'}

    decoded = {}

    desc = description.split('|')
    if desc[0] in _databases:
        db_info = _databases[desc[0]]
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

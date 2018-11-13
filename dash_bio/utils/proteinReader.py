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


def readFasta(
        filePath='',
        dataString='',
        cleanData=True
):
    '''
    Reads a file in FASTA format, either from a file or from a string of raw
    data.

    :param (string) filePath: The full path to the FASTA file (can be relative
                              or absolute).
    :param (string) dataString: A string corresponding to the FASTA file
                                (including newline characters).

    :rtype (list[dict]): A list of protein objects, each containing a
                         description (based on the header line) and the amino
                         acid sequence with, optionally, all non-amino-acid
                         letters removed.
    '''
    fastaData = []
    
    # ensure we are only given one file specification
    if(len(filePath) > 0 and len(dataString) > 0):
        raise Exception(
            "Please specify either a file path or a \
            string of data."
        )

    rawData = []
    
    # open file if given a path
    if(len(filePath) > 0):
        with open(filePath, 'r') as f:
            lines = f.readlines()
            if('>' not in lines[0]):
                rawData = ['>']
            rawData += lines
            
    # or read the raw string
    else:
        lines = dataString.split('\n')
        if('>' not in lines[0]):
            rawData = ['>']
        rawData += lines

    records = []

    tf = tempfile.NamedTemporaryFile(mode='w+', delete=False)
    tf.write('\n'.join(rawData))
    tf.close()
    records = list(SeqIO.parse(tf.name, 'fasta'))

    fastaData = [
        {'description': decode_description(r.description),
         'sequence': str(r.seq)} for r in records
    ]

    return fastaData

    
def decode_description(description):
    if(len(description) == 0):
        return {'-1': 'no description'}
                   
    decoded = {}
    
    desc = description.split('|')
    if desc[0] in _databases:
        dbInfo = _databases[desc[0]]
        if desc[0] in ['sp', 'tr']:
            decoded['accession'] = desc[1]
            # using regex to get the other information
            rs = re.search(
                '([^\s]+)(.*)\ OS=(.*)\ OX=(.*)\ GN=(.*)\ PE=(.*)\ SV=(.*)$',
                string=desc[2]
            )
            for i in range(2, len(dbInfo)):
                decoded[dbInfo[i]] = rs.group(i)
        else:
            # shift by one, since first section in header describes
            # the database
            for i in range(len(desc)-1):
                decoded[dbInfo[i]] = desc[i+1]
    else:
        for i in range(len(desc)-1):
            decoded['desc-'+str(i)] = desc[i+1]

    return decoded

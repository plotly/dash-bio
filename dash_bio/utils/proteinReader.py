import tempfile
from Bio import SeqIO

# information on database header formats, taken from
# https://en.wikipedia.org/wiki/FASTA_format
_databases = {
    'gb': ['accession', 'locus'],
    'emb': ['accession', 'locus'],
    'dbj': ['accession', 'locus'],
    'pir': ['entry'],
    'prf': ['name'],
    'sp': ['accession', '[entry name] [protein name] [OS=organism name] [OX=organism identifier] [GN=gene name] [PE=protein existence] [SV=sequence version]'],
    'tr': ['accession', '[entry name] [protein name] [OS=organism name] [OX=organism identifier] [GN=gene name] [PE=protein existence] [SV=sequence version]'],
    'pdb': ['entry', 'chain'],
    'pat': ['country', 'number'],
    'bbs': ['number'],
    'gnl': ['database', 'identifier'],
    'ref': ['accession', 'locus'],
    'lcl': ['identifier'],
    'nxp': ['identifier', 'gene name', 'protein name', 'isoform name']
}

# amino acid codes
_aminoAcids = {'C': 'CYS',
               'D': 'ASP',
               'S': 'SER',
               'Q': 'GLN',
               'K': 'LYS',
               'I': 'ILE',
               'P': 'PRO',
               'T': 'THR',
               'F': 'PHE',
               'N': 'ASN',
               'G': 'GLY',
               'H': 'HIS',
               'L': 'LEU',
               'R': 'ARG',
               'W': 'TRP',
               'A': 'ALA',
               'V': 'VAL',
               'E': 'GLU',
               'Y': 'TYR',
               'M': 'MET',
               'X': 'any',
               '-': 'gap'}


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
    proteins = []
    
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

    proteins = [
        {'description': decode_description(r.description),
         'sequence': str(r.seq)} for r in records
    ]

    return proteins

    
def decode_description(description):
    if(len(description) == 0):
        return {'-1': 'no description'}
                   
    decoded = {}
    
    desc = description.split('|')
    if desc[0] in _databases:
        dbInfo = _databases[desc[0]]
        # shift by one, since first section in header describes
        # the database
        for i in range(len(desc)-1):
            decoded[dbInfo[i]] = desc[i+1]
    else:
        for i in range(len(desc)-1):
            decoded['desc-'+str(i)] = desc[i+1]

    return decoded


def translateSeq(
        sequence
):
    """
    Translates a string of amino acid codes into their respective
    three-letter representations.

    :param (string) sequence: The amino acid sequence.

    :rtype (list): A list of the three-letter representations of
                   each amino acid in the input sequence.
    """
    
    sequence_3letter = []
    
    for code in sequence:
        sequence_3letter.append(_aminoAcids[code])

    return sequence_3letter


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
    """
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
    """
    proteins = []
    rawDataString = ''

    # ensure we are only given one file specification
    if(len(filePath) > 0 and len(dataString) > 0):
        raise Exception(
            "Please specify either a file path or a \
            string of data."
        )
    
    # open file if given a path
    if(len(filePath) > 0):
        try:
            with open(filePath, 'r') as f:
                rawDataString = ('').join(f.readlines())
        except FileNotFoundError:
            return proteins
    # otherwise, just take the string specified
    else:
        rawDataString = dataString

    # determine if there is a header line
    bare = False
    if('>') not in rawDataString:
        bare = True
        
    # split into header line and sequence
    lines = (rawDataString.split('>'))
    
    for l in lines:
        # get rid of all carriage returns
        tmp = l.replace('\r', '\n').replace('\r\n', '\n')
        
        # skip comments and empty lines
        if(len(tmp) == 0 or l[0] == ';'):
            continue

        protein = {
            'description': {},
            'sequence': ''
        }

        seqInfo = [line for line in tmp.split('\n') if len(line) > 0]
        
        if(bare):
            # no description if it's a bare sequence
            protein['sequence'] = ('').join(seqInfo)
        else:
            # description will be the first non-comment line
            desc = seqInfo[0].split('|')
            # use database descriptions if possible
            if desc[0] in _databases:
                dbInfo = _databases[desc[0]]
                # shift by one, since first section in header describes
                # the database
                for i in range(len(desc)-1):
                    protein['description'][dbInfo[i]] = desc[i+1]
            # otherwise, provide indices as keys
            else:
                for i in range(len(desc)-1):
                    protein['description']['desc-'+str(i)] = desc[i+1]

            # get the sequence
            protein['sequence'] = ('').join(
                [l.strip('\n') for l in seqInfo[1:]]
            ).upper()
                    
        # remove all invalid characters if necessary
        if(cleanData):
            protein['sequence'] = cleanSeq(protein['sequence'])
            
        # add to list
        proteins.append(protein)
    
    return proteins


def cleanSeq(
        sequence
):
    """
    Removes all non-amino-acid letters from a sequence of amino acids.

    :param (string) sequence: The amino acid sequence.

    :rtype (string): The amino acid sequence with all non-valid
                     amino acids removed.
    """
    
    seq_clean = ''
    
    for code in sequence:
        if code not in _aminoAcids:
            continue
        seq_clean += code

    return seq_clean


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
    seq = cleanSeq(sequence)
    
    for code in seq:
        sequence_3letter.append(_aminoAcids[code])

    return sequence_3letter


import os

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
        fname,
        folder='.'
):
    proteins = []
    fullPath = ''
    
    try:
        fullPath = os.path.join(folder, fname)
    except TypeError:
        return proteins
    
    with open(fullPath, 'r') as f:

        bare = False
        
        rawString = ('').join(f.readlines())
        if('>') not in rawString:
            bare = True
        
        # get all the different amino acids
        lines = (rawString.split('>'))

        for l in lines:
            # skip comments and empty lines
            if(len(l) == 0 or l[0] == ';'):
                continue

            protein = {
                'description': {},
                'sequence': ''
            }

            seqInfo = l.split('\n')

            # no description if it's a bare sequence
            if(bare):
                protein['sequence'] = ('').join(seqInfo)
            else:
                # description will be the first non-comment line
                desc = seqInfo[0].split('|')
                # use database descriptions if possible
                if desc[0] in _databases:
                    dbInfo = _databases[desc[0]]
                    for i in range(len(desc)-1):
                        protein['description'][dbInfo[i]] = desc[i+1]
                # otherwise, provide indices as keys
                else:
                    for i in range(len(desc)-1):
                        protein['description']['desc-'+str(i)] = desc[i+1]
                protein['sequence'] = ('').join([l.strip('\n')
                                                 for l in seqInfo[1:]]).upper()
                
            # remove all invalid characters
            protein['sequence'] = cleanSeq(protein['sequence'])

            # add to list
            proteins.append(protein)

        # return the protein if there is just one in the file
        if(len(proteins) == 1):
            return proteins[0]

        return proteins


def cleanSeq(
        sequence
):
    seq_clean = ''
    
    for code in sequence:
        if code not in _aminoAcids:
            continue
        seq_clean += code

    return seq_clean


def translateSeq(
        sequence
):
    sequence_3letter = []
    seq = cleanSeq(sequence)
    
    for code in seq:
        sequence_3letter.append(_aminoAcids[code])

    return sequence_3letter


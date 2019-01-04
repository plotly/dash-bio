import tempfile
import re


def readXYZ(
        filePath='',
        dataString=''
):
    '''
    Reads .xyz files from either a raw string or a
    relative file path. 

    :param (string) filePath: The relative filepath to
                              the .xyz file. 
    :param (string) dataString: A raw string containing 
                                the contents of the .xyz 
                                file.

    :rtype (list): A list of the atoms in the order that 
                   they appear on the file, stored in 
                   objects with keys "symbol", "x", "y",
                   and "z". 
    '''
    atoms = []

    if(len(filePath) > 0 and len(dataString) > 0):
        raise Exception(
            "Please specify either a file path or a \
            string of data."
        )

    if(len(filePath) > 0):
        with open(filePath, 'r') as f:
            lines = f.readlines()

    else:
        lines = dataString.split('\n')

    with tempfile.NamedTemporaryFile(mode='w+', delete=False) as tf:
        tf.write('\n'.join(lines))
    
    with open(tf.name, 'r') as f:
        for line in lines:
            # each line in an xyz file contains the symbol for the atom at
            # that position, as well as the x, y, and z coordinates of the
            # atom separated by spaces
            # the coordinates can have signs (+/-), and decimals (.).
            # an example line in a xyz file:
            # C    +0.125    -1.032    +2.000
            r = re.search(
                r'^([\w]+)\s+([\w\.\+\-]+)\s+([\w\.\+\-]+)\s+([\w\.\+\-]+)',
                line)

            # pass if the line does not contain this information
            if r is None or len(r.groups()) < 4:
                continue
            
            atom = {
                'symbol': r.group(1),
                'x': float(r.group(2)),
                'y': float(r.group(3)),
                'z': float(r.group(4))
            }
            
            atoms.append(atom)

    return atoms

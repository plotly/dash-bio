import tempfile
import re

def readXYZ(
        filePath='',
        dataString=''
):
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
            r = re.search(
                r'^([\w]+)\s+([\w\.\+\-]+)\s+([\w\.\+\-]+)\s+([\w\.\+\-]+)',
                line)
            
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

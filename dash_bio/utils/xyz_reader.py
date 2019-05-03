import tempfile
import re


def read_xyz(
        file_path='',
        data_string=''
):
    """
    Reads .xyz files from either a raw string or a
    relative file path.

    :param (string) file_path: The relative filepath to
                              the .xyz file.
    :param (string) data_string: A raw string containing
                                the contents of the .xyz
                                file.

    :rtype (list): A list of the atoms in the order that
                   they appear on the file, stored in
                   objects with keys "symbol", "x", "y",
                   and "z".
    """
    atoms = []

    if len(file_path) > 0 and len(data_string) > 0:
        raise Exception(
            "Please specify either a file path or a \
            string of data."
        )

    if len(file_path) > 0:
        with open(file_path, 'r') as f:
            lines = f.readlines()

    else:
        lines = data_string.split('\n')

    with tempfile.NamedTemporaryFile(mode='w+', delete=False) as tf:
        tf.write('\n'.join(lines))

    with open(tf.name, 'r'):
        for line in lines:
            # each line in an xyz file contains the symbol for the atom at
            # that position, as well as the x, y, and z coordinates of the
            # atom separated by spaces
            # the coordinates can have signs (+/-), and decimals (.).
            # an example line in a xyz file:
            # C    +0.125    -1.032    +2.000
            r = re.search(
                r'^\s*([\w]+)\s+([\w\.\+\-]+)\s+([\w\.\+\-]+)\s+([\w\.\+\-]+)\s*',
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

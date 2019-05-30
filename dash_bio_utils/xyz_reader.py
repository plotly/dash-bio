"""XYZ reader

This module contains functions that can read an XYZ file and return a
Python dictionary with its contents."""

import tempfile
import re


def read_xyz(datapath_or_datastring,
             is_datastring=False):
    """
    Read data in .xyz format, from either a file or a raw string.

    :param (string) datapath_or_datastring: Either the full path to the XYZ file (can be relative
                                            or absolute), or a string corresponding to the content
                                            of an XYZ file (including newline characters).
    :param (bool, optional) is_datastring: False (default) if data filepath is passed to
                                           `datapath_or_datastring`, True if raw data string is
                                           passed instead.

    :rtype (list): A list of the atoms in the order that
                   they appear on the file, stored in
                   objects with keys "symbol", "x", "y",
                   and "z".
    """

    # ensure argument is a string
    if not isinstance(datapath_or_datastring, str):
        raise TypeError('Please pass either data filepath or string of raw data.')

    atoms = []

    # open file if given a path
    if is_datastring is False:
        with open(datapath_or_datastring, 'r') as f:
            lines = f.readlines()

    # or read the raw string
    else:
        lines = datapath_or_datastring.split('\n')

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

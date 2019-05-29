"""Chem structure reader

This module contains functions that extract data from JSON files for
compatibility with the Dash Bio Molecule2dViewer component.

Attributes: _ELEMENTS (dict): A dictionary that maps the atomic
    numbers of elements to their corresponding symbols."""

import json
import numpy as np

from periodictable import elements


_ELEMENTS = {el.number: el.symbol for el in elements}


def _get_distance(point_1, point_2, base_distance):

    """Get the Euclidean distance between two points.

    :param (dict) point_1: The first point; a dictionary with keys "x"
                           and "y" which represent, respectively, the
                           x and y coordinates of the point in space
                           as a floating-point value.
    :param (dict) point_2: The second point; a dictionary with keys
                           "x" and "y" which represent, respectively,
                           the x and y coordinates of the point in
                           space as a floating-point value.
    :param (float) base_distance: A multiplier for the calculated
                                  Euclidean distance. A larger base
                                  distance corresponds to a longer
                                  bond length between atoms or
                                  residues in the molecule.
    :rtype (float): The Euclidean distance between the two points,
                    scaled by a multiplier.
    """

    return np.round(base_distance*np.sqrt(
        (point_1['x'] - point_2['x'])**2 +
        (point_1['y'] - point_2['y'])**2
    ), 2)


def read_structure(
        file_path='',
        data_string='',
        bond_distance=20.0
):

    """Read molecular strucural data in JSON format, either from a file or
    from a string of raw data.

    :param (string) file_path: The full path to the JSON file (can be
                               relative or absolute).
    :param (string) data_string: A string corresponding to the JSON file.
    :param (float) bond_distance: The base value to use as a multiplier
                                  for the computation of bond distance.
    :rtype (dict[list]): A dictionary containing the atoms and bonds
                         in the file.

    """

    # ensure we are only given one file specification
    if (file_path and data_string) or (not file_path and not data_string):
        raise Exception(
            "Please specify either a file path or a \
            string of data."
        )

    structural_info = {}

    if file_path:
        with open(file_path, 'r') as f:
            structural_info = json.loads(f.read())
    else:
        structural_info = json.loads(data_string)

    structure = structural_info['PC_Compounds'][0]

    try:
        atoms = [
            {'id': atm[0],
             'atom': atm[1]}
            for atm in list(zip(
                structure['atoms']['aid'],
                [_ELEMENTS[int(el)] for el in structure['atoms']['element']]
            ))
        ]
    except KeyError:
        atoms = []

    try:
        bonds = [
            {'id': int(bnd[0]),
             'source': int(bnd[1]),
             'target': int(bnd[2]),
             'bond': int(bnd[3]),
             'strength': 1}
            for bnd in list(zip(
                [i+1 for i in range(len(structure['bonds']['aid1']))],
                structure['bonds']['aid1'],
                structure['bonds']['aid2'],
                structure['bonds']['order']
            ))
        ]
        pos = {
            i: {
                'x':
                structure['coords'][0]['conformers'][0]['x'][
                    structure['coords'][0]['aid'].index(i)
                ],
                'y':
                structure['coords'][0]['conformers'][0]['y'][
                    structure['coords'][0]['aid'].index(i)
                ]
            } for i in structure['coords'][0]['aid']
        }
    except KeyError:
        bonds = []

    for bnd in bonds:
        bnd['distance'] = _get_distance(
            pos[bnd['source']],
            pos[bnd['target']],
            bond_distance
        )

    parsed_structure = {
        'nodes': atoms,
        'links': bonds
    }
    return parsed_structure

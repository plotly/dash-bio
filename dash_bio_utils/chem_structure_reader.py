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


def read_structure(datapath_or_datastring,
                   is_datafile=True,
                   bond_distance=20.0):

    """Read molecular strucural data in JSON format, either from a file or
    from a string of raw data.

    :param (string) datapath_or_datastring: Either the path to the JSON data file (can be relative
                                            or absolute), or a string corresponding to the content
                                            of a JSON file (including newline characters).
    :param (bool, optional) is_datafile: Either True (default) if passing the filepath to the data,
                                         or False if passing a string of raw data.
    :param (float) bond_distance: The base value to use as a multiplier
                                  for the computation of bond distance.
    :rtype (dict[list]): A dictionary containing the atoms and bonds
                         in the file.

    """

    # ensure required argument is a string
    err_msg = 'Please pass either the filepath to the data, or the data as a string.'
    assert isinstance(datapath_or_datastring, str), err_msg

    structural_info = {}

    if is_datafile:
        with open(datapath_or_datastring, 'r') as f:
            structural_info = json.loads(f.read())
    else:
        structural_info = json.loads(datapath_or_datastring)

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

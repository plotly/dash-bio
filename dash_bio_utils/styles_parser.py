"""Styles parser

This module contains functions that can specify the style of a
molecule that is rendered using the Molecule3dViewer component in Dash
Bio."""

import json

ATOM_COLOR_DICT = {
    "C": "#c8c8c8",
    "H": "#ffffff",
    "N": "#8f8fff",
    "S": "#ffc832",
    "O": "#f00000",
    "F": "#ffff00",
    "P": "#ffa500",
    "K": "#42f4ee",
    "G": "#3f3f3f"
}

CHAIN_COLOR_DICT = {
    "A": "#320000",
    "B": "#8a2be2",
    "C": "#ff4500",
    "D": "#00bfff",
    "E": "#ff00ff",
    "F": "#ffff00",
    "G": "#4682b4",
    "H": "#ffb6c1",
    "I": "#a52aaa",
    "J": "#ee82ee",
    "K": "#75FF33",
    "L": "#FFBD33",
    "M": "#400040",
    "N": "#004000",
    "O": "#008080",
    "P": "#008080",
    "x": "#9c6677",
    "Y": "#b7c5c8"
}

RESIDUE_COLOR_DICT = {
    'ALA': '#C8C8C8',
    'ARG': '#145AFF',
    'ASN': '#00DCDC',
    'ASP': '#E60A0A',
    'CYS': '#E6E600',
    'GLN': '#00DCDC',
    'GLU': '#E60A0A',
    'GLY': '#EBEBEB',
    'HIS': '#8282D2',
    'ILE': '#0F820F',
    'LEU': '#0F820F',
    'LYS': '#145AFF',
    'MET': '#E6E600',
    'PHE': '#3232AA',
    'PRO': '#DC9682',
    'SER': '#FA9600',
    'THR': '#FA9600',
    'TRP': '#B45AB4',
    'TYR': '#3232AA',
    'VAL': '#0F820F',
    'ASX': '#FF69B4',
    'GLX': '#FF69B4',
    'A': '#A0A0FF',
    'DA': '#A0A0FF',
    'G': '#FF7070',
    'DG': '#FF7070',
    'I': '#80FFFF',
    'C': '#FF8C4B',
    'DC': '#FF8C4B',
    'T': '#A0FFA0',
    'DT': '#A0FFA0',
    'U': '#FF8080'
}

tmp = {  # pylint: disable=invalid-name
    'hydrophobic': ['GLY', 'ALA', 'LEU', 'ILE', 'VAL', 'MET', 'PRO'],
    'polar': ['ASN', 'GLN', 'SER', 'THR', 'CYS'],
    'acidic': ['ASP', 'GLU'],
    'basic': ['LYS', 'ARG', 'HIS'],
    'aromatic': ['TRP', 'TYR', 'PHE'],
    'purine': ['A', 'G', 'DA', 'DG'],
    'pyrimidine': ['DT', 'DC', 'U', 'I', 'C']
}

RESIDUE_TYPES = {}
for aa_type in tmp:
    for aa in tmp[aa_type]:
        RESIDUE_TYPES[aa] = aa_type

RESIDUE_TYPE_COLOR_DICT = {
    'hydrophobic': '#00ff80',
    'polar': '#ff00bf',
    'acidic': '#ff4000',
    'basic': '#0040ff',
    'aromatic': '#ffff00',
    'purine': '#A00042',
    'pyrimidine': '#4F4600'
}


def fill_in_defaults(input_dict, default_dict):
    """Function to automatically populate any missing values in the
    specified style dictionary with default values.
    """
    if input_dict is None:
        input_dict = {}
    for key in default_dict:
        if key not in input_dict.keys():
            input_dict[key] = default_dict[key]
    return input_dict


def create_style(
        pdb_path,
        style,
        mol_color,
        residue_type_colors=None,
        atom_colors=None,
        chain_colors=None,
        residue_colors=None
):
    """Function to create the different styles (stick, cartoon, sphere)
    using the protein data bank (PDB) file as input. This function outputs
    the styles as a JSON file
    @param pdb_path
    Name of the biomolecular structure file in PDB format
    @param style
    Type of representation of the biomolecule (options: stick, cartoon, sphere)
    @param mol_color
    Coloring scheme for depicting biomolecules (options: residue_type, atom, residue, chain)
    @param custom_dict
    optional parameter to specify the color scheme for different chains
    in JSON format
    @param atm_color
    optional parameter to specify the color scheme for different atoms
    in JSON format
    """

    # Read input file
    with open(pdb_path, 'r') as infile:
        # store only non-empty lines
        lines = [l.strip() for l in infile if l.strip()]

    # Merge dictionaries if necessary
    residue_type_colors = fill_in_defaults(residue_type_colors,
                                           RESIDUE_TYPE_COLOR_DICT)
    atom_colors = fill_in_defaults(atom_colors,
                                   ATOM_COLOR_DICT)
    chain_colors = fill_in_defaults(chain_colors,
                                    CHAIN_COLOR_DICT)
    residue_colors = fill_in_defaults(residue_colors,
                                      RESIDUE_COLOR_DICT)

    # Initialize variables
    chains = []
    atm_types = []
    res_names = []

    data = {}

    # Variables that store the character positions of different
    # parameters from the molecule PDB file
    pos = {
        'chain': [21, 22],
        'atm_type': [77, 78],
        'res_name': [17, 20]
    }

    for l in lines:
        line = l.split()

        # ignore irrelevant lines
        if "ATOM" not in line[0] and "HETATM" not in line[0]:
            continue

        chain = l[
            pos['chain'][0]:pos['chain'][1]
        ]
        atm_type = l[
            pos['atm_type'][0]:pos['atm_type'][1]
        ]
        res_name = l[
            pos['res_name'][0]:pos['res_name'][1]
        ].strip()

        chains.append(chain)
        atm_types.append(atm_type)
        res_names.append(res_name)

        index = len(chains) - 1

        if line[0] == "ATOM":
            if mol_color == 'chain':
                data[index] = {
                    'color': chain_colors[
                        chain
                    ] if chain in chain_colors else '#BEA06E',
                    'visualization_type': style
                }
            elif mol_color == 'residue':
                data[index] = {
                    'color': residue_colors[
                        res_name.upper()
                    ] if res_name.upper() in residue_colors else '#BEA06E',
                    'visualization_type': style
                }
            elif mol_color == 'residue_type':
                data[index] = {
                    'color': residue_type_colors[
                        RESIDUE_TYPES[res_name.upper()]
                    ] if res_name.upper() in RESIDUE_TYPES else '#BEA06E',
                    'visualization_type': style
                }
            elif mol_color == 'atom':
                data[index] = {
                    'color': atom_colors[
                        atm_type
                    ] if atm_type in atom_colors else '#330000',
                    'visualization_type': style
                }

        else:
            if atm_type in atom_colors:
                data[index] = {
                    "color": atom_colors[atm_type],
                    "visualization_type": "stick"
                }
            else:
                data[index] = {
                    "color": "#330000",
                    "visualization_type": "stick"
                }

    return json.dumps(data)

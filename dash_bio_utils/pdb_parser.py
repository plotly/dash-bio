"""PDB parser

This module contains functions that can read PDB files and return a
JSON representation of the structural data and styling."""

import re
import six.moves.urllib.request as urlreq
from six.moves.urllib.parse import urlparse as urlparse
from six.moves.urllib.error import URLError
from .constants import (
    ATOM_COLOR_DICT,
    CHAIN_COLOR_DICT,
    RESIDUE_COLOR_DICT,
    RESIDUE_TYPES,
    RESIDUE_TYPE_COLOR_DICT,
)

import parmed as pmd

"""Styles parser
The following functions specify the style of a
molecule that is rendered using the Molecule3dViewer component in Dash
Bio."""


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
    lines,
    style,
    mol_color,
    residue_type_colors=None,
    atom_colors=None,
    chain_colors=None,
    residue_colors=None,
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

    # Merge dictionaries if necessary
    residue_type_colors = fill_in_defaults(residue_type_colors, RESIDUE_TYPE_COLOR_DICT)
    atom_colors = fill_in_defaults(atom_colors, ATOM_COLOR_DICT)
    chain_colors = fill_in_defaults(chain_colors, CHAIN_COLOR_DICT)
    residue_colors = fill_in_defaults(residue_colors, RESIDUE_COLOR_DICT)

    # Initialize variables
    chains = []
    atm_types = []
    res_names = []

    style_data = {}

    # Variables that store the character positions of different
    # parameters from the molecule PDB file
    pos = {"chain": [21, 22], "atm_type": [77, 78], "res_name": [17, 20]}

    for l in lines:
        line = l.split()

        # ignore irrelevant lines
        if "ATOM" not in line[0] and "HETATM" not in line[0]:
            continue

        chain = l[pos["chain"][0] : pos["chain"][1]]
        atm_type = l[pos["atm_type"][0] : pos["atm_type"][1]]
        res_name = l[pos["res_name"][0] : pos["res_name"][1]].strip()

        chains.append(chain)
        atm_types.append(atm_type)
        res_names.append(res_name)

        index = len(chains) - 1

        if line[0] == "ATOM":
            if mol_color == "chain":
                style_data[index] = {
                    "color": chain_colors[chain]
                    if chain in chain_colors
                    else "#BEA06E",
                    "visualization_type": style,
                }
            elif mol_color == "residue":
                style_data[index] = {
                    "color": residue_colors[res_name.upper()]
                    if res_name.upper() in residue_colors
                    else "#BEA06E",
                    "visualization_type": style,
                }
            elif mol_color == "residue_type":
                style_data[index] = {
                    "color": residue_type_colors[RESIDUE_TYPES[res_name.upper()]]
                    if res_name.upper() in RESIDUE_TYPES
                    else "#BEA06E",
                    "visualization_type": style,
                }
            elif mol_color == "atom":
                style_data[index] = {
                    "color": atom_colors[atm_type]
                    if atm_type in atom_colors
                    else "#330000",
                    "visualization_type": style,
                }

        else:
            if atm_type in atom_colors:
                style_data[index] = {
                    "color": atom_colors[atm_type],
                    "visualization_type": "stick",
                }
            else:
                style_data[index] = {"color": "#330000", "visualization_type": "stick"}

    return style_data


def create_data(pdb_path, style="cartoon", mol_color="residue", **kwargs):
    """
    Parse the protein data bank (PDB) file to generate
    input modelData for the Molecule3dViewer component
    with the specified style parameters. This function outputs
    the molData and styles as a dict of JSON formatted values.

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

    output_dict = {}

    # Use parmed to read the bond information pdb file
    top = pmd.load_file(pdb_path)

    # Check if the pdb_path points to a URL and decode it if necessary
    if urlparse(pdb_path).scheme != "":
        try:
            file = urlreq.urlopen(pdb_path)
            lines = [
                l.decode("utf-8").strip() for l in file if l.decode("UTF-8").strip()
            ]
        except URLError as e:
            print(e.reason)

    else:
        # Read PDB file to create atom/bond information
        with open(pdb_path, "r") as infile:
            # store only non-empty lines
            lines = [l.strip() for l in infile if l.strip()]

    # Initialize all variables
    var_nchains = []
    serial = []
    atm_name = []
    res_name = []
    chain = []
    res_id = []
    positions = []
    occupancy = []
    temp_factor = []
    atom_type = []
    ct = 0

    modelData = {"atoms": [], "bonds": []}

    # Variables that store the character positions of different
    # parameters from the molecule PDB file
    serialpos = [6, 11]
    atm_namepos = [12, 16]
    r_namepos = [17, 20]
    chainpos = [21, 22]
    r_idpos = [22, 26]
    xpos = [30, 38]
    ypos = [38, 46]
    zpos = [46, 54]
    occupos = [54, 60]
    bfacpos = [60, 66]
    atm_typepos = [77, 79]

    for l in lines:
        line = l.split()
        if "ATOM" in line[0] or "HETATM" in line[0]:
            serial.append(int(l[serialpos[0] : serialpos[1]]))
            atm_name.append(l[atm_namepos[0] : atm_namepos[1]].strip())
            val_r_name = l[r_namepos[0] : r_namepos[1]].strip()
            res_name.append(val_r_name)
            chain_val = l[chainpos[0] : chainpos[1]].strip()
            chain.append(chain_val)
            if chain_val not in var_nchains:
                var_nchains.append(chain_val)
            val_r_id = int(l[r_idpos[0] : r_idpos[1]])
            res_id.append(val_r_id)
            x = float(l[xpos[0] : xpos[1]])
            y = float(l[ypos[0] : ypos[1]])
            z = float(l[zpos[0] : zpos[1]])
            positions.append([x, y, z])
            occupancy.append(l[occupos[0] : occupos[1]].strip())
            temp_factor.append(l[bfacpos[0] : bfacpos[1]].strip())
            atom_type.append(l[atm_typepos[0] : atm_typepos[1]].strip())
            ct += 1

    # Create list of atoms
    tmp_res = res_id[0]
    resct = 1
    for i in range(len(chain)):  # pylint: disable=consider-using-enumerate
        if tmp_res != res_id[i]:
            tmp_res = res_id[i]
            resct += 1
        modelData["atoms"].append(
            {
                "name": atm_name[i],
                "chain": chain[i],
                "positions": positions[i],
                "residue_index": resct,
                "element": atom_type[i],
                "residue_name": res_name[i] + str(res_id[i]),
                "serial": i,
            }
        )

    # Create list of bonds using the parmed module
    for i in range(len(top.bonds)):
        bondpair = top.bonds[i].__dict__
        atom1 = re.findall(r"\[(\d+)\]", str(bondpair["atom1"]))
        atom2 = re.findall(r"\[(\d+)\]", str(bondpair["atom2"]))
        modelData["bonds"].append(
            {"atom2_index": int(atom1[0]), "atom1_index": int(atom2[0])}
        )

    styles_data = create_style(lines, style=style, mol_color=mol_color, **kwargs)

    output_dict['mol3d'] = {"styles": styles_data, "modelData": modelData}

    return output_dict

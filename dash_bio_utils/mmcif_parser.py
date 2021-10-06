"""mmCIF parser

This module contains functions that can read mmCIF files and return a
JSON representation of the structural and styling data."""

import re
import six.moves.urllib.request as urlreq
from six.moves.urllib.parse import urlparse as urlparse
from six.moves.urllib.error import URLError
import parmed as pmd

from .styles import (
    ATOM_COLOR_DICT,
    CHAIN_COLOR_DICT,
    RESIDUE_COLOR_DICT,
    RESIDUE_TYPES,
    RESIDUE_TYPE_COLOR_DICT,
    create_style
)


def create_data(mmcif_path, style="cartoon", mol_color="residue", **kwargs):
    """
    Parse the mmCIF file to generate input modelData

    @param mmcif_path
    Name of the biomolecular structure file in mmCIF format
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
    top = pmd.load_file(mmcif_path)

    # Check if the pdb_path points to a URL and decode it if necessary
    if urlparse(mmcif_path).scheme != "":
        try:
            file = urlreq.urlopen(mmcif_path)
            lines = [
                l.decode("utf-8").strip() for l in file if l.decode("UTF-8").strip()
            ]
        except URLError as e:
            print(e.reason)

    else:
        # Read PDB file to create atom/bond information
        with open(mmcif_path, "r") as infile:
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

    modelData = {
        'atoms': [],
        'bonds': []
    }

    # Variables that store the character positions of different
    # parameters from the molecule mmCIF file
    serialpos = 1
    atm_namepos = 3
    r_namepos = 5
    chainpos = 6
    r_idpos = 16
    xpos = 10
    ypos = 11
    zpos = 12
    occupos = 13
    bfacpos = 14
    atm_typepos = 2

    for l in lines:
        line = l.split()
        if "ATOM" in line[0] or "HETATM" in line[0]:
            serial.append(int(line[serialpos]))
            atm_name.append(line[atm_namepos].strip())
            val_r_name = line[r_namepos].strip()
            res_name.append(val_r_name)
            chain_val = line[chainpos].strip()
            chain.append(chain_val)
            if chain_val not in var_nchains:
                var_nchains.append(chain_val)
            val_r_id = int(line[r_idpos])
            res_id.append(val_r_id)
            x = float(line[xpos])
            y = float(line[ypos])
            z = float(line[zpos])
            positions.append([x, y, z])
            occupancy.append(line[occupos].strip())
            temp_factor.append(line[bfacpos].strip())
            atom_type.append(line[atm_typepos].strip())
            ct += 1
    # Create list of atoms
    tmp_res = res_id[0]
    resct = 1
    for i in range(len(chain)):  # pylint: disable=consider-using-enumerate
        if tmp_res != res_id[i]:
            tmp_res = res_id[i]
            resct += 1
        modelData['atoms'].append({
            "name": atm_name[i],
            "chain": chain[i],
            "positions": positions[i],
            "residue_index": resct,
            "element": atom_type[i],
            "residue_name": res_name[i] + str(res_id[i]),
            "serial": i,
        })

    # Create list of bonds using the parmed module
    for i in range(len(top.bonds)):
        bondpair = top.bonds[i].__dict__
        atom1 = re.findall(r"\[(\d+)\]", str(bondpair['atom1']))
        atom2 = re.findall(r"\[(\d+)\]", str(bondpair['atom2']))
        modelData['bonds'].append({
            'atom2_index': int(atom1[0]),
            'atom1_index': int(atom2[0])
        })

    styles_data = create_style(path=mmcif_path, lines=lines, style=style, mol_color=mol_color, **kwargs)

    output_dict['mol3d'] = {"styles": styles_data, "modelData": modelData}

    return output_dict

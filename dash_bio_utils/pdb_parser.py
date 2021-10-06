"""PDB parser

This module contains functions that can read PDB files and return a
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

    styles_data = create_style(path=pdb_path, lines=lines, style=style, mol_color=mol_color, **kwargs)

    output_dict['mol3d'] = {"styles": styles_data, "modelData": modelData}

    return output_dict

import parmed as pmd
import re
import json
import os
from shutil import copy2


def create_data(pdb_path):
    """
    Parse the protein data bank (PDB) file to generate
    input modelData

    @param pdb_path
    Name of the biomolecular structure file in PDB format

    """

    # Create local copy of temp file
    copy2(pdb_path, './tmp.pdb')

    # Use parmed to read the bond information from temp file
    top = pmd.load_file('tmp.pdb')

    # Remove the created temp file
    os.remove('tmp.pdb')

    # Read PDB file to create atom/bond information
    with open(pdb_path, 'r') as infile:
        # store only non-empty lines
        lines = [l.strip() for l in infile if l.strip()]

    # Initialize all variables
    varNchains = []
    serial = []
    atmName = []
    resName = []
    chain = []
    resId = []
    positions = []
    occupancy = []
    tempFactor = []
    atomType = []
    ct = 0

    datb = {
        'atoms': [],
        'bonds': []
    }

    # Variables that store the character positions of different
    # parameters from the molecule PDB file
    serialpos = [6, 11]
    atmNamepos = [12, 16]
    rNamepos = [17, 20]
    chainpos = [21, 22]
    rIdpos = [22, 26]
    xpos = [30, 38]
    ypos = [38, 46]
    zpos = [46, 54]
    occupos = [54, 60]
    Bfacpos = [60, 66]
    atmTypepos = [77, 79]

    for l in lines:
        line = l.split()
        if "ATOM" in line[0] or "HETATM" in line[0]:
            serial.append(int(l[serialpos[0]:serialpos[1]]))
            atmName.append(l[atmNamepos[0]:atmNamepos[1]].strip())
            val_rName = l[rNamepos[0]:rNamepos[1]].strip()
            resName.append(val_rName)
            chain_val = l[chainpos[0]:chainpos[1]].strip()
            chain.append(chain_val)
            if chain_val not in varNchains:
                varNchains.append(chain_val)
            val_rId = int(l[rIdpos[0]:rIdpos[1]])
            resId.append(val_rId)
            x = float(l[xpos[0]:xpos[1]])
            y = float(l[ypos[0]:ypos[1]])
            z = float(l[zpos[0]:zpos[1]])
            positions.append([x, y, z])
            occupancy.append(l[occupos[0]:occupos[1]].strip())
            tempFactor.append(l[Bfacpos[0]:Bfacpos[1]].strip())
            atomType.append(l[atmTypepos[0]:atmTypepos[1]].strip())
            ct += 1

    # Create list of atoms
    tmpRes = resId[0]
    resct = 1
    for i in range(len(chain)):
        if tmpRes != resId[i]:
            tmpRes = resId[i]
            resct += 1
        datb['atoms'].append({
            "name": atmName[i],
            "chain": chain[i],
            "positions": positions[i],
            "residue_index": resct,
            "element": atomType[i],
            "residue_name": resName[i]+str(resId[i]),
            "serial": i,
        })

    # Create list of bonds using the parmed module
    for i in range(len(top.bonds)):
        bondpair = top.bonds[i].__dict__
        atom1 = re.findall(r"\[(\d+)\]", str(bondpair['atom1']))
        atom2 = re.findall(r"\[(\d+)\]", str(bondpair['atom2']))
        datb['bonds'].append({
            'atom2_index': int(atom1[0]),
            'atom1_index': int(atom2[0])
        })

    return json.dumps(datb)

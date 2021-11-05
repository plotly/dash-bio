"""PDB parser

This module contains a class that can read PDB files and return a dictionary of structural data"""

import re

import parmed as pmd


class PdbParser:
    """
    Parse the protein data bank (PDB) file to generate
    input data for Molecule3dViewer, Molecule2dViewer and Speck components.

    @param pdb_path
    Path to PDB file (either HTTP or local path).
    """

    def __init__(self, s: str):

        if re.search(r'^[1-9][0-9A-z]{3}$', s):
            # d is PDB id (https://proteopedia.org/wiki/index.php/PDB_code)
            self.structure = pmd.download_PDB(s)
        else:
            # d is HTTP url or local file
            self.structure = pmd.load_file(s)

        self.atoms = self.structure.atoms
        self.bonds = self.structure.bonds

    def mol3d_data(self) -> dict:
        """
        Generate input data for Molecule3dViewer component.
        """

        data = {'atoms': [], 'bonds': []}

        for a in self.atoms:
            data["atoms"].append({
                "serial": a.idx,
                "name": a.name,
                "elem": a.element_name,
                "positions": [a.xx, a.xy, a.xz],
                "mass_magnitude": a.mass,
                "residue_index": a.residue.idx,
                "residue_name": a.residue.name,
                "chain": a.residue.chain,

            })

        for b in self.bonds:
            data["bonds"].append({
                "atom1_index": b.atom1.idx,
                "atom2_index": b.atom2.idx,
                "bond_order": b.order
            })

        return data

    def mol2d_data(self) -> dict:
        """
        Generate input data for Molecule2dViewer component.
        """

        data = {'nodes': [], 'links': []}

        for a in self.atoms:
            data["nodes"].append({
                "id": a.idx,
                "atom": a.element_name
            })

        for i, b in enumerate(self.bonds):
            data["links"].append({
                "id": i,
                "source": b.atom1.idx,
                "target": b.atom2.idx,
                "bond": b.order,
                "distance": b.measure(),
                "strength": b.energy() # TODO verify
            })

        return data

    def speck_data(self) -> list:
        """
        Generate input data for Speck component.
        """
        data = []
        for a in self.atoms:
            data.append({
                "symbol": a.element_name,
                "x": a.xx,
                "y": a.xy,
                "z": a.xz
            })

        return data

"""NGL Parser

This module contains functions that parse and structure data into a
dict for use with the NGL Molecule Viewer component.

One or multiple input data files in the PDB or .cif.gz format can be
entered to return a dict to input as the `data` param of the component.
"""

import glob
import six.moves.urllib.request as urlreq
import gzip

# Helper function to split the aa_range and pdb_id
def single_split(string, sep):
    parts = string.split(sep)
    if len(parts) > 2:
        raise ValueError('expected "{}" once, found {} in "{}"'.format(sep, string.count(sep),
                                                                       string))
    return parts

# Helper function to set highlights
def get_highlights(string, sep, atom_indicator):
    residues_list = []
    atoms_list = []

    str_, _str = single_split(string, sep)
    for e in _str.split(","):
        if atom_indicator in e:
            atoms_list.append(e.replace(atom_indicator, ""))
        else:
            residues_list.append(e)

    return (str_, {"atoms": ",".join(atoms_list), "residues": ",".join(residues_list)})


# Helper function to load the data
def get_data(data_path, pdb_id, color, reset_view=False, local=True):
    chain = "ALL"
    aa_range = "ALL"
    highlight_dic = {"atoms": "", "residues": ""}

    # Check if only one chain should be shown
    if "." in pdb_id:
        pdb_id, chain = single_split(pdb_id, ".")

        highlights_sep = "@"
        atom_indicator = "a"
        # Check if only a specified amino acids range should be shown:
        if ":" in chain:
            chain, aa_range = single_split(chain, ":")

            # Check if atoms should be highlighted
            if highlights_sep in aa_range:
                aa_range, highlight_dic = get_highlights(
                    aa_range, highlights_sep, atom_indicator
                )

        else:
            if highlights_sep in chain:
                chain, highlight_dic = get_highlights(
                    chain, highlights_sep, atom_indicator
                )

    if local:
        fname = [f for f in glob.glob(data_path + pdb_id + ".*")][0]

        if "gz" in fname:
            ext = fname.split(".")[-2]
            with gzip.open(fname, "r") as f:
                content = f.read().decode("UTF-8")
        else:
            ext = fname.split(".")[-1]
            with open(fname, "r") as f:
                content = f.read()
    else:
        fname =  single_split(pdb_id, ".")[0] + '.pdb'
        ext = fname.split(".")[-1]
        content= urlreq.urlopen(data_path + fname).read().decode("utf-8")

    return {
        "filename": fname.split("/")[-1],
        "ext": ext,
        "selectedValue": pdb_id,
        "chain": chain,
        "aaRange": aa_range,
        "chosen": highlight_dic,
        "color": color,
        "config": {"type": "text/plain", "input": content},
        "resetView": reset_view,
        "uploaded": False,
    }

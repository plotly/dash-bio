import json

from dash_bio.utils import mol3dviewer_styles_creator, pdb_parser,\
    protein_reader, xyz_reader

pdb = pdb_parser.PdbParser('../dashbio_demos/dash-molecule-3d-viewer/data/1bna.pdb')
with open('mol3d_model_data.json', 'w+') as f:
    f.write(json.dumps(pdb.mol3d_data()))

with open('mol3d_styles_data.json', 'w+') as f:
    f.write(json.dumps(mol3dviewer_styles_creator.create_mol3d_style(
        pdb.mol3d_data().get("atoms"),
        'cartoon',
        'atom'
    )))

with open('sequence_viewer_data.json', 'w+') as f:
    f.write(json.dumps(protein_reader.read_fasta(
        datapath_or_datastring='../dashbio_demos/dash-sequence-viewer/data/P01308.fasta.txt'
    )[0]))

with open('speck_data.json', 'w+') as f:
    f.write(json.dumps(xyz_reader.read_xyz(
        datapath_or_datastring='../dashbio_demos/dash-speck/data/methane.xyz'
    )))

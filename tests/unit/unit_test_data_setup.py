import json

from dash_bio_utils import pdb_parser, protein_reader, \
    styles_parser, xyz_reader

with open('mol3d_model_data.json', 'w+') as f:
    f.write(pdb_parser.create_data(
        '../dashbio_demos/dash-molecule-3d-viewer/data/1bna.pdb'
    ))

with open('mol3d_styles_data.json', 'w+') as f:
    f.write(styles_parser.create_style(
        '../dashbio_demos/dash-molecule-3d-viewer/data/1bna.pdb',
        'cartoon',
        'atom'
    ))

with open('sequence_viewer_data.json', 'w+') as f:
    f.write(json.dumps(protein_reader.read_fasta(
        datapath_or_datastring='../dashbio_demos/dash-sequence-viewer/data/P01308.fasta.txt'
    )[0]))

with open('speck_data.json', 'w+') as f:
    f.write(json.dumps(xyz_reader.read_xyz(
        datapath_or_datastring='../dashbio_demos/dash-speck/data/methane.xyz'
    )))

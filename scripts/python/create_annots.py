""" Creates simulated genome annotation data

Data is currently simulated single-nucleotide variations (SNVs).

Examples:

    # Create 1000 annots in 3 tracks with 5% in 1st track, 80% in 2nd, 15% in 3rd
    python3 create_annots.py --track_annot_percents 5 80 15

    # Create 2500 annots in 10 tracks and include track metadata
    python3 create_annots.py --num_annots 2500 --num_tracks 7 --include_metadata

    # Create 90000 annots evenly distributed among 3 tracks
    python3 create_annots.py --num_annots 90000 --num_tracks 5
"""

# TODO:
# - Add handling for non-human organisms
#     - Enhance with more data than simply position, e.g.:
#     - Variant type (use Sequence Ontology ID)
#     - Molecular consequence (use SO ID)
#     - Clinical significance
#     - Transcript accession
#     - HGVS expression


import argparse
import json
import math
import random

parser = argparse.ArgumentParser(
    description=__doc__,
    formatter_class=argparse.RawDescriptionHelpFormatter)
parser.add_argument('--output_dir',
                    help='Directory to send output data to',
                    default='../../static/data/annotations/')
parser.add_argument('--num_annots',
                    help='Number of annotations to create',
                    type=int,
                    default=1000)
parser.add_argument('--assembly',
                    help='Genome assembly reference to use: GRCh38 or GRCh37',
                    default='GRCh38')
parser.add_argument('--num_tracks',
                    help='Number of annotation tracks',
                    type=int,
                    default=3)
parser.add_argument('--include_metadata',
                    help='Whether to include metadata about the track set',
                    action='store_true'
                    )
parser.add_argument('--track_annot_percents',
                    help=(
                      'Percentage of total annotations in each track, e.g. ' +
                      '5,80,15 for 5%% in 1st track, 80%% in 2nd, 15%% in 3rd.  ' +
                      'Defaults to even distribution of annots among tracks.'
                    ),
                    metavar='int', type=int, nargs='*')
parser.add_argument('--density',
                    help=(
                      'Whether annotations are "dense" or "sparse".  ' +
                      'Dense is where each genomic feature (e.g. each ' +
                      'gene) has annotations on all tracks. Sparse is ' +
                      'where each feature has an annotation on only one track.'
                    ),
                    default='sparse')

args = parser.parse_args()
output_dir = args.output_dir
num_annots = args.num_annots
assembly = args.assembly
num_tracks = args.num_tracks
include_metadata = args.include_metadata
track_annot_percents = args.track_annot_percents
density = args.density

track_index_pool = []
if track_annot_percents is None:
    track_annot_percents = []
    for i in range(0, num_tracks):
        track_annot_percents.append(math.ceil(100/num_tracks))

for i, track_annot_percent in enumerate(track_annot_percents):
    track_index_pool += [i]*track_annot_percent

annots = []

chrs = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', 'X', 'Y'
]

lengths_GRCh38 = {
    '1': 248956422, '2': 242193529, '3': 198295559,
    '4': 190214555, '5': 181538259, '6': 170805979,
    '7': 159345973, '8': 145138636, '9': 138394717,
    '10': 133797422, '11': 135086622, '12': 133275309,
    '13': 114364328, '14': 107043718, '15': 101991189,
    '16': 90338345, '17': 83257441, '18': 80373285,
    '19': 58617616, '20': 64444167, '21': 46709983,
    '22': 50818468, 'X': 156040895, 'Y': 57227415
}

lengths_GRCh37 = {
    '1': 249250621, '2': 243199373, '3': 198022430,
    '4': 191154276, '5': 180915260, '6': 171115067,
    '7': 159138663, '8': 146364022, '9': 141213431,
    '10': 135534747, '11': 135006516, '12': 133851895,
    '13': 115169878, '14': 107349540, '15': 102531392,
    '16': 90354753, '17': 81195210, '18': 78077248,
    '19': 59128983, '20': 63025520, '21': 48129895,
    '22': 51304566, 'X': 155270560, 'Y': 59373566
}

if assembly == 'GRCh38':
    chr_lengths = lengths_GRCh38
else:
    chr_lengths = lengths_GRCh37

for chr in chrs:
    annots.append({'chr': chr, 'annots': []})

for i in range(0, num_annots):
    j = str(i + 1)

    chr = i % 24
    chr_length = chr_lengths[chrs[chr]]

    # Distribute annotations evenly across this chromosome
    start = int((i * chr_length)/num_annots + 1)

    length = 0

    annot = [
        'rs' + j,
        start,
        length
    ]

    if density == 'sparse':
        random_index = random.randrange(0, 99)
        track_index = track_index_pool[random_index]
        annot.append(track_index)
    else:
        for k in range(0, num_tracks):
            annot_value = random.randrange(0, 99)
            annot.append(annot_value)

    annots[chr]['annots'].append(annot)

if density == 'sparse':
    track_keys = ['trackIndex']
else:
    track_keys = []
    for i in range(0, num_tracks):
        track_keys.append('track_' + str(i + 1))

top_annots = {}
if include_metadata:
    top_annots['metadata'] = {
        'species': 'human',
        'assembly': assembly,
        'numTracks': num_tracks,
        'numAnnots': num_annots
    }
top_annots['keys'] = ['name', 'start', 'length'] + track_keys
top_annots['annots'] = annots

annots = json.dumps(top_annots)

num_annots = str(num_annots)
output_path = output_dir + num_annots + '_virtual_snvs.json'

open(output_path, 'w').write(annots)
print(
    'Output ' + num_annots + ' ' + density + ' annotations ' +
    'on ' + str(num_tracks) + ' tracks ' +
    'on assembly ' + assembly + ' ' +
    'to ' + output_path
)

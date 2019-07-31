import sys

APP_REMOTE_MAPPING = {
    'dash-alignment-chart': 'app_alignment_viewer',
    'dash-circos': 'app_circos',
    'dash-clustergram': 'app_clustergram',
    'dash-ideogram': 'app_ideogram',
    'dash-manhattan-plot': 'app_manhattan_plot',
    'dash-molecule2d-viewer': 'app_molecule2d',
    'dash-molecule3d-viewer': 'app_molecule3d',
    'dash-needle-plot': 'app_needle_plot',
    'dash-onco-print': 'app_onco_print',
    'dash-sequence-viewer': 'app_sequence_viewer',
    'dash-speck': 'app_speck',
    'dash-volcano-plot': 'app_volcano_plot'
}


def generate_procfile(app_name):
    return f'web: gunicorn tests.dashbio_demos.{app_name}:server'


with open('Procfile', 'w+') as f:
    f.write(generate_procfile(APP_REMOTE_MAPPING[sys.argv[1]]))

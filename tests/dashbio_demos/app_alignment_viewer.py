import base64
import os
import dash_html_components as html
import dash_core_components as dcc
from dash.dependencies import Input, Output
import dash_bio


text_style = {
    'color': "#506784",
    'font-family': 'Open Sans'
}

DATAPATH = os.path.join(".", "tests", "dashbio_demos", "sample_data", "alignment_viewer_")

# Datasets
with open('{}sample.fasta'.format(DATAPATH), encoding='utf-8') as data_file:
    dataset1 = data_file.read()

with open('{}p53.fasta'.format(DATAPATH), encoding='utf-8') as data_file:
    dataset2 = data_file.read()

with open('{}p53_clustalo.fasta'.format(DATAPATH), encoding='utf-8') as data_file:
    dataset3 = data_file.read()

datasets = {
    'dataset1': dataset1,
    'dataset2': dataset2,
    'dataset3': dataset3,
}


def description():
    return 'View multiple sequence alignments of genomic or protenomic sequences.'


def header_colors():
    return {
        'bg_color': '#10785e',
        'font_color': 'white',
    }


def layout():
    return html.Div(id='alignment-body', children=[
        html.Div([
            html.Div([
                dash_bio.AlignmentChart(id='alignment-chart', data=dataset3)
            ], className='alignment-card eight columns'),
            html.Div([
                dcc.Tabs(
                    id='alignment-tabs',
                    value='alignment-tab-select',
                    children=[
                        dcc.Tab(
                            label='Select',
                            value='alignment-tab-select',
                            children=[
                                html.Div([
                                    html.H4(
                                        "Select Dataset"
                                    ),
                                    dcc.Dropdown(
                                        id='alignment-dropdown',
                                        className='alignment-select',
                                        options=[
                                            {
                                                'label': 'Sample.fasta',
                                                'value': 'dataset1'
                                            },
                                            {
                                                'label': 'P53.fasta naive',
                                                'value': 'dataset2'
                                            },
                                            {
                                                'label': 'P53.fasta aligned (ClustalW)',
                                                'value': 'dataset3'
                                            },
                                        ],
                                        value='dataset3',
                                    ),
                                ], className='alignment-subcard'),
                                html.Div([
                                    html.H4(
                                        "Hover/Click/Event Data"
                                    ),
                                    dcc.Textarea(
                                        id="alignment-events",
                                        placeholder="Hover or click on data to see it here.",
                                        value="Hover or click on data to see it here.",
                                        className="alignment-events",
                                    ),
                                ], className='alignment-subcard'),
                                html.Div([
                                    html.H4(
                                        "What is Alignment Viewer?"
                                    ),
                                    html.P(
                                        """
                                        The Alignment Viewer (MSA) component is used to align
                                        multiple genomic or proteomic sequences from a FASTA or
                                        Clustal file. Among its extensive set of features,
                                        the multiple sequence alignment viewer can display
                                        multiple subplots showing gap and conservation info,
                                        alongside industry standard colorscale support and
                                        consensus sequence. No matter what size your alignment
                                        is, Alignment Viewer is able to display your genes or
                                        proteins snappily thanks to the underlying WebGL
                                        architecture powering the component. You can quickly
                                        scroll through your long sequence with a slider or a
                                        heatmap overview.
                                        """
                                    ),
                                    html.P(
                                        """
                                        Note that the AlignmentChart only returns a chart of
                                        the sequence, while AlignmentViewer has integrated
                                        controls for colorscale, heatmaps, and subplots allowing
                                        the user to interactively control their sequences.
                                        """
                                    ),
                                    html.P(
                                        """
                                        Read more about the component here:
                                        https://github.com/plotly/react-alignment-viewer
                                        """
                                    ),
                                ], className='alignment-subcard')
                            ],
                        ),
                        dcc.Tab(
                            label='Upload',
                            value='alignment-tab-upload',
                            children=[
                                dcc.Upload(
                                    id='alignment-file-upload',
                                    className='alignment-upload',
                                    children=html.Div([
                                        "Drag and drop FASTA files or select files."
                                    ]),
                                ),
                                html.Div([
                                    html.H4(
                                        "Hover/Click/Event Data"
                                    ),
                                    dcc.Textarea(
                                        id="alignment-events-2",
                                        placeholder="Hover or click on data to see it here.",
                                        value="Hover or click on data to see it here.",
                                        className="alignment-events",
                                    ),
                                ], className='alignment-subcard'),
                                html.Div([
                                    html.H4(
                                        "What is Alignment Viewer?"
                                    ),
                                    html.P(
                                        """
                                        The Alignment Viewer (MSA) component is used to align
                                        multiple genomic or proteomic sequences from a FASTA or
                                        Clustal file. Among its extensive set of features,
                                        the multiple sequence alignment viewer can display
                                        multiple subplots showing gap and conservation info,
                                        alongside industry standard colorscale support and
                                        consensus sequence. No matter what size your alignment
                                        is, Alignment Viewer is able to display your genes or
                                        proteins snappily thanks to the underlying WebGL
                                        architecture powering the component. You can quickly
                                        scroll through your long sequence with a slider or a
                                        heatmap overview.
                                        """
                                    ),
                                    html.P(
                                        """
                                        Note that the AlignmentChart only returns a chart of
                                        the sequence, while AlignmentViewer has integrated
                                        controls for colorscale, heatmaps, and subplots
                                        allowing the user to interactivelycontrol their sequences.
                                        """
                                    ),
                                    html.P(
                                        """
                                        Read more about the component here:
                                        https://github.com/plotly/react-alignment-viewer
                                        """
                                    ),
                                ], className='alignment-subcard')
                            ],
                        ),
                        dcc.Tab(
                            label='Customize',
                            value='alignment-tab-customize',
                            children=[
                                html.Div([
                                    html.H4('Work in progress')
                                ], className='alignment-subcard'),
                            ],
                        ),
                    ],
                ),
            ], className='alignment-card four columns'),
        ], className='alignment-wrapper row'),
        dcc.Store(id='alignment-data-store'),
    ])


def callbacks(app):

    # Handle file upload/selection into data store
    @app.callback(
        Output('alignment-data-store', 'data'),
        [Input('alignment-dropdown', 'value'),
         Input('alignment-file-upload', 'contents'),
         Input('alignment-file-upload', 'filename')]
    )
    def update_storage(dropdown, contents, filename):

        if (contents is not None) and ('fasta' in filename):
            content_type, content_string = contents.split(',')
            content = base64.b64decode(content_string).decode('UTF-8')
        else:
            content = datasets[dropdown]

        return content

    # Handle event data
    @app.callback(
        Output("alignment-events", "value"),
        [Input("alignment-chart", "eventDatum")]
    )
    def event_data_select(data):
        return str(data)

    # Handle event data
    @app.callback(
        Output("alignment-events-2", "value"),
        [Input("alignment-chart", "eventDatum")]
    )
    def event_data_select_2(data):
        return str(data)

    # Render main chart
    @app.callback(
        Output('alignment-chart', 'data'),
        [Input('alignment-data-store', 'data')]
    )
    def update_chart(input_data):
        return input_data


if __name__ == '__main__':
    from utils.app_standalone import run_standalone_app
    run_standalone_app(layout, callbacks)

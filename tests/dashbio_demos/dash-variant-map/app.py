"""
This app is an example showing how VariantMap can be utilized in a Dash app.
VariantMap is a genomic structural variant (SV) visualization technique that
displays variants across multiple samples in a single heatmap.

NOTE: This app may not be able to handle large input files (>32M) in Google Chrome.
      Do try with Mozilla Firefox for these larger files.

Author: CY THAM

Version: 1.0.0
"""

import os
import base64
import io

import math
import pandas as pd
import dash_bio
import dash_html_components as html
import dash_core_components as dcc
from dash.dependencies import Input, Output, State
from dash.exceptions import PreventUpdate


from layout_helper import run_standalone_app


DATAPATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "data")


def description():
    return "Variant Map visualizes cohort structural variants in a heatmap."


def header_colors():
    return {"bg_color": "#1f6335", "font_color": "#ffffff", "light_logo": True}


main_desc = (
    "VariantMap is a genomic structural variant (SV) "
    "visualization technique that displays variants across "
    "multiple samples in a single heatmap. Each row represents "
    "a sample and each column represents an SV breakend in the "
    "sample cohort. The colors indicate the class of an SV "
    "present in a sample. The heatmap can be customized "
    "interactively to suit your analysis by changing various "
    'components in the "Customize" tab.'
)


data_desc = (
    "VariantMap requires a dataframe object that is generated "
    "by VariantBreak. Do note that only NanoVar VCF "
    "files are currently compatible to work with VariantBreak "
    "in creating the dataframe."
)


def layout():
    return html.Div(
        id="variantmap-body",
        className="app-body",
        children=[
            html.Div(
                id="variantmap-control-tabs",
                className="control-tabs",
                children=[
                    dcc.Tabs(
                        id="variantmap-tabs",
                        value="what-is",
                        children=[
                            # "What is" tab
                            dcc.Tab(
                                label="About",
                                value="what-is",
                                children=html.Div(
                                    className="control-tab",
                                    children=[
                                        html.H4(
                                            className="what-is",
                                            children="What is Variant Map?",
                                        ),
                                        html.P(main_desc),
                                        html.P(data_desc),
                                    ],
                                ),
                            ),
                            # Data tab
                            dcc.Tab(
                                label="Data",
                                value="data",
                                children=html.Div(
                                    className="control-tab",
                                    children=[
                                        # Dataset upload
                                        html.Div(
                                            "Upload dataset:",
                                            title="Upload your own dataset below.",
                                            className="app-controls-name",
                                        ),
                                        html.Div(
                                            id="variantmap-file-upload",
                                            title=(
                                                "Upload your own VariantBreak "
                                                "generated HDF5 dataset here."
                                            ),
                                            children=[
                                                dcc.Upload(
                                                    id="upload-data",
                                                    className="control-upload",
                                                    children=html.Div([
                                                        "Drag and drop a .h5 file or ",
                                                        html.A("select a file."),
                                                    ]),
                                                    accept=".hdf5,.h5",
                                                    multiple=False,
                                                )
                                            ],
                                        ),
                                        html.Br(),
                                        # Label file upload
                                        html.Div(
                                            "Upload label file:",
                                            title=(
                                                "This file is used to rename and "
                                                "sort samples.\n"
                                                "Example:\n"
                                                "#Default name<tab>Label\n"
                                                "S1<tab>SampleA\n"
                                                "S3<tab>SampleC\n"
                                                "S2<tab>SampleB"
                                            ),
                                            className="app-controls-name",
                                        ),
                                        html.Div(
                                            id="variantmap-tsv-upload",
                                            title=(
                                                "Upload a .tsv file to rename and "
                                                "sort samples.\n"
                                                "Example:\n"
                                                "#Default name<tab>Label\n"
                                                "S1<tab>SampleA\n"
                                                "S3<tab>SampleC\n"
                                                "S2<tab>SampleB"
                                            ),
                                            children=[
                                                dcc.Upload(
                                                    id="upload-tsv",
                                                    className="control-upload",
                                                    children=html.Div([
                                                        "Drag and drop a .tsv file or ",
                                                        html.A("select file."),
                                                    ]),
                                                    accept=".txt,.tsv,.csv",
                                                    multiple=False,
                                                )
                                            ],
                                        ),
                                        html.Br(),
                                        # Sample selection check boxes
                                        html.Div(
                                            id="output-data-info",
                                            className="fullwidth-app-controls-name",
                                            children=[
                                                dcc.Checklist(
                                                    id="select-samples",
                                                    style={"display": "none"},
                                                ),
                                                html.Br(),
                                                html.Button(
                                                    id="submit-button-samples",
                                                    style={"display": "none"},
                                                ),
                                            ],
                                        ),
                                    ],
                                ),
                            ),
                            # Customize tab
                            dcc.Tab(
                                label="Customize",
                                value="customize",
                                children=html.Div(
                                    className="control-tab",
                                    children=[
                                        html.Div(
                                            id="customize-tab",
                                            className="fullwidth-app-controls-name",
                                            children=[
                                                dcc.Dropdown(
                                                    id="sample_filt",
                                                    style={"display": "none"},
                                                ),
                                                dcc.Dropdown(
                                                    id="file_filt",
                                                    style={"display": "none"},
                                                ),
                                                dcc.Dropdown(
                                                    id="gene_names",
                                                    style={"display": "none"},
                                                ),
                                                dcc.Input(
                                                    id="input_index",
                                                    style={"display": "none"},
                                                ),
                                                dcc.Checklist(
                                                    id="select-genetype",
                                                    style={"display": "none"},
                                                ),
                                                dcc.Checklist(
                                                    id="select-feature",
                                                    style={"display": "none"},
                                                ),
                                                dcc.Checklist(
                                                    id="select-annotation",
                                                    style={"display": "none"},
                                                ),
                                                dcc.Input(
                                                    id="entries_size",
                                                    style={"display": "none"},
                                                ),
                                                html.Button(
                                                    id="submit-button",
                                                    style={"display": "none"},
                                                ),
                                            ],
                                        )
                                    ],
                                ),
                            ),
                            # Variant info tab
                            dcc.Tab(
                                label="Variant info",
                                value="info",
                                children=html.Div(
                                    className="control-tab",
                                    children=[
                                        html.Div(
                                            id="info-tab",
                                            className="fullwidth-app-controls-name",
                                            children=[
                                                html.Div(
                                                    "Click on variant to display "
                                                    "its information"
                                                )
                                            ],
                                        )
                                    ],
                                ),
                            ),
                        ],
                    )
                ],
            ),
            dcc.Loading(
                className="dashbio-loading",
                children=html.Div(
                    id="variantmap-wrapper",
                    children=[
                        # Error message box
                        html.Div(
                            id="error-msg",
                            style={
                                "color": "crimson",
                                "text-align": "center",
                                "font-size": "18px",
                            },
                        ),
                        # Plot VariantMap figure
                        html.Div(
                            id="variantmap-fig",
                            children=[
                                html.Div(
                                    dcc.Graph(id="variantmap"),
                                    style={"display": "none"},
                                )
                            ],
                        ),
                        # Plot Slider
                        html.Div(
                            id="batch-slider",
                            children=[
                                html.Div("", style={"textAlign": "center"}),
                                html.Div(
                                    dcc.Slider(id="slider",), style={"display": "none"}
                                ),
                            ],
                        ),
                    ],
                ),
            ),
            # Create Store component to store JSON of dataframe and metadata
            dcc.Store(id="memory"),
            # To store variant counts
            dcc.Store(id="count-store"),
            # To store custom settings
            dcc.Store(id="custom-store"),
            # To store name dictionary
            dcc.Store(id="name_dict"),
            # To store sample labels
            dcc.Store(id="sample_labels"),
            # To store sample order
            dcc.Store(id="sample_order"),
        ],
    )


def callbacks(app):

    # Callback upon uploading of dataset
    @app.callback(
        [
            Output("output-data-info", "children"),
            Output("count-store", "data"),
            Output("memory", "data"),
            Output("customize-tab", "children"),
            Output("name_dict", "data"),
        ],
        [Input("upload-data", "contents"), Input("upload-data", "filename")],
    )
    def read_data(contents, filename):
        # print("call - read_data")
        if filename:
            content_type, content_string = contents.split(",")

            # Decode base64
            decoded = base64.b64decode(content_string)

            # Load input hdf5 file into a pandas dataframe and extract metadata
            with pd.HDFStore(
                "data.h5",
                mode="r",
                driver="H5FD_CORE",
                driver_core_backing_store=0,
                driver_core_image=io.BytesIO(decoded).read(),
            ) as store:
                df = store["dataset"]
                metadata = store.get_storer("dataset").attrs.metadata

        else:
            # Load sample hdf5 into a pandas dataframe and extract metadata
            filename = "sample_data.h5"
            with pd.HDFStore(os.path.join(DATAPATH, filename), mode="r") as store:
                df = store["dataset"]
                metadata = store.get_storer("dataset").attrs.metadata

        # Sample_info children
        child_sample = [
            html.Div("Input file: {}".format(filename)),
            html.Br(),
            html.Div('Select samples to display and click "SUBMIT":'),
            dcc.Checklist(
                id="select-samples",
                options=[
                    {"label": name, "value": name} for name in metadata["sample_names"]
                ],
                value=[name for name in metadata["sample_names"]],
            ),
            html.Br(),
            html.Button(
                id="submit-button-samples", className="customButton", children="SUBMIT"
            ),
        ]

        # Count store count
        row_counts = df.shape[0]

        # Memory data
        datasets = {
            "df": df.to_json(orient="split", date_format="iso"),
            "metadata": metadata,
        }

        # Set-up customize tab
        # Get all unique gene names
        total_genes = set()
        if "Gene_name" in df.columns:
            for genes in df.Gene_name:
                if genes != "":
                    for gene in genes.split("/"):
                        total_genes.add(gene.strip().rstrip(";"))
        total_genes = sorted(total_genes)

        # Get all unique gene types
        gene_types = set()
        if "Gene_type" in df.columns:
            for t in df.Gene_type:
                if t != "":
                    for _t in t.split(","):
                        gene_types.add(_t.strip())

        main_names = ["protein_coding", "lncRNA", "miRNA", "snRNA", "snoRNA"]
        others = sorted(gene_types.difference(main_names))

        # Get labels of non-GTF annotation columns
        bed_annote = []
        for name in metadata["annotation"]:
            if name != "GTF":
                bed_annote.append(name)

        # Get all unique annotation names
        annotes = set()
        for bed in bed_annote:
            for annote in df.loc[:, bed]:
                if annote != "":
                    for _annote in annote.split("/"):
                        annotes.add(_annote.strip())
        annotes = sorted(annotes)
        annote_dict = {annote: annote for annote in annotes}

        # Create name dictionary
        name_dict = {
            "Promoter": "promoter",
            "Exon": "exon",
            "Intron": "intron",
            "Protein coding": "protein_coding",
            "lncRNA": "lncRNA",
            "miRNA": "miRNA",
            "snRNA": "snRNA",
            "snoRNA": "snoRNA",
            "Others": others,
        }

        name_dict.update(annote_dict)

        # Define fixed gene types
        main_types = ["Protein coding", "lncRNA", "miRNA", "snRNA", "snoRNA", "Others"]

        # Define fixed gene features
        features = ["Promoter", "Exon", "Intron"]

        # Customize tab children
        child_customize = [
            html.Div(
                "Customize the heatmap by adjusting the components below and "
                'click "SUBMIT" at the end after finalizing your settings. '
                "Hover over each section header for more information."
            ),
            html.Br(),
            html.Div(
                "Filter by variant file:",
                title="Hide variants that are present in these samples.",
                style={"font-weight": "bold"},
            ),
            dcc.Dropdown(
                id="sample_filt",
                options=[
                    {"label": name, "value": name} for name in metadata["sample_names"]
                ],
                value=None,
                multi=True,
                placeholder="Variant files",
                searchable=False,
            ),
            html.Br(),
            html.Div(
                "Filter by filter file:",
                title="Hide variants that intersect with these filter files.",
                style={"font-weight": "bold"},
            ),
            dcc.Dropdown(
                id="file_filt",
                options=[{"label": name, "value": name} for name in metadata["filter"]],
                value=None,
                multi=True,
                placeholder="Filter files",
                searchable=False,
            ),
            html.Br(),
            html.Div(
                "Search variants by gene name:",
                title="Select only variants annotated with these gene names.",
                style={"font-weight": "bold"},
            ),
            dcc.Dropdown(
                id="gene_names",
                options=[{"label": name, "value": name} for name in total_genes],
                value=None,
                multi=True,
                placeholder="Search gene names",
            ),
            html.Br(),
            html.Div(
                "Search variants by index:",
                title=(
                    'Select only variants labeled with these indexes separated by ";"'
                ),
                style={"font-weight": "bold"},
            ),
            dcc.Input(
                id="input_index", type="text", value=None, placeholder="Search indexes"
            ),
            html.Br(),
            html.Br(),
            html.Div(
                "Filter by gene type:",
                title="Select only variants annotated with these gene types.",
                style={"font-weight": "bold"},
            ),
            dcc.Checklist(
                id="select-genetype",
                options=[{"label": name, "value": name} for name in main_types],
            ),
            html.Br(),
            html.Div(
                "Filter by gene feature:",
                title="Select only variants annotated with these gene features.",
                style={"font-weight": "bold"},
            ),
            dcc.Checklist(
                id="select-feature",
                options=[{"label": name, "value": name} for name in features],
            ),
            html.Br(),
            html.Div(
                "Filter by other annotations:" if len(annotes) > 0 else None,
                title="Select only variants annotated with these annotations.",
                style={"font-weight": "bold"},
            ),
            dcc.Checklist(
                id="select-annotation",
                options=[{"label": name, "value": name} for name in annotes],
            ),
            html.Br(),
            html.Div(
                "Set section size:",
                title="Set the number of variants to display per section.",
                style={"font-weight": "bold"},
            ),
            dcc.Input(
                id="entries_size",
                type="number",
                value=2500,
                placeholder="No. of SVs",
                debounce=True,
                min=100,
                max=500000,
            ),
            html.Br(),
            html.Br(),
            html.Button(
                id="submit-button", className="customButton", children="SUBMIT"
            ),
        ]
        return child_sample, row_counts, datasets, child_customize, name_dict

    # Callback upon uploading of label file
    @app.callback(
        [Output("sample_labels", "data"), Output("sample_order", "data")],
        [Input("upload-tsv", "contents")],
    )
    def rename_labels(contents):
        label_dict = {}
        sample_order = []
        if contents:
            content_type, content_string = contents.split(",")
            # Decode base64
            decoded = base64.b64decode(content_string)
            for line in decoded.decode("utf-8").splitlines():
                if not line.startswith("#"):
                    label_dict[line.split("\t")[0]] = line.split("\t")[1]
                    sample_order.append(line.split("\t")[0])
        return label_dict, sample_order

    # Callback upon storing customize and count data
    @app.callback(
        Output("batch-slider", "children"),
        [Input("count-store", "data"), Input("custom-store", "data")],
    )
    def make_slider(row_counts, custom_config):
        # print("call - make_slider")
        if row_counts is None:
            raise PreventUpdate

        if custom_config is None:
            entries = 2500  # Default entries number
            # Calculate number of divisions of default dataframe
            div = max(math.ceil(row_counts / entries), 1)
        else:
            entries = custom_config["entries"]
            new_row_counts = custom_config["row_counts"]
            div = max(math.ceil(new_row_counts / entries), 1)

        child_slider = [
            html.Div(
                "Sections of %i Variants" % entries, style={"textAlign": "center"}
            ),
            html.Div(
                dcc.Slider(
                    id="slider",
                    min=1,
                    max=div,
                    value=1,
                    marks={str(i + 1): str(i + 1) for i in range(div)},
                    step=None,
                )
            ),
        ]
        return child_slider

    # Callback upon clicking customize submit button
    @app.callback(
        Output("custom-store", "data"),
        [Input("submit-button", "n_clicks")],
        [
            State("sample_filt", "value"),
            State("file_filt", "value"),
            State("input_index", "value"),
            State("gene_names", "value"),
            State("select-genetype", "value"),
            State("select-feature", "value"),
            State("select-annotation", "value"),
            State("entries_size", "value"),
            State("memory", "data"),
            State("name_dict", "data"),
        ],
    )
    def store_custom(
        n_clicks,
        sample_filt,
        file_filt,
        index_str,
        gene_names,
        gene_types,
        features,
        annotes,
        entries,
        data,
        name_dict,
    ):
        # print("call - store_custom")
        if n_clicks is None:
            # print("Update - store_custom = None")
            return None

        sample_list = []
        filter_list = []
        index_list = []
        annotation_dict = {}
        custom_dict = {}

        if sample_filt:
            for i in sample_filt:
                sample_list.append(i)

        if file_filt:
            for i in file_filt:
                filter_list.append(i)

        if index_str:
            index_list = [x.strip() for x in index_str.split(";") if x]
            custom_dict["index_list"] = index_list

        annotation_dict["Gene_name"] = []
        if gene_names:
            for i in gene_names:
                annotation_dict["Gene_name"].append(i)

        annotation_dict["Gene_type"] = []
        if gene_types:
            for i in gene_types:
                annotation_dict["Gene_type"].append(i)

        annotation_dict["Gene_feature"] = []
        if features:
            for i in features:
                annotation_dict["Gene_feature"].append(i)

        for name in data["metadata"]["annotation"]:
            if name != "GTF":
                if annotes:
                    annotation_dict[name] = annotes
                else:
                    annotation_dict[name] = []

        custom_dict["entries"] = entries

        # Load dataframe from memory
        df = pd.read_json(data["df"], orient="split")

        # Check if variant indexes present in dataframe
        # if not df.index.isin(index_list).any():
        #     raise HaltCallback('ERROR: Some variant indexes not found in the data.')
        try:
            df = df.loc[index_list, :]
        except KeyError:
            pass

        # Calculate row counts of new subsetted dataframe
        # Subset dataframe by annotation
        for col in annotation_dict:
            custom_dict[col] = []
            if annotation_dict[col]:  # If not blank list
                try:
                    labels = [name_dict[x] for x in annotation_dict[col]]
                except KeyError:
                    labels = [x for x in annotation_dict[col]]
                new_labels = []
                for i in labels:
                    if type(i) == list:
                        for j in i:
                            new_labels.append(j)
                    else:
                        new_labels.append(i)
                df = df[df[col].isin(new_labels)]
                custom_dict[col] = new_labels

        # Subset dataframe by sample filter
        if sample_list:  # If not blank list
            for sample in sample_list:
                df = df[df[sample] == 0.0]

        # Subtset dataframe by filter file
        if filter_list:  # If not blank list
            for _filter in filter_list:
                df = df[df[_filter] != "1"]

        custom_dict["row_counts"] = df.shape[0]
        custom_dict["filter_sample"] = sample_list
        custom_dict["filter_file"] = filter_list
        custom_dict["index_list"] = index_list

        return custom_dict

    # Callback upon slider selection, data submit button click
    # and storing of sample label data
    @app.callback(
        [Output("variantmap-fig", "children"), Output("error-msg", "children")],
        [
            Input("slider", "value"),
            Input("submit-button-samples", "n_clicks"),
            Input("sample_labels", "data"),
        ],
        [
            State("memory", "data"),
            State("custom-store", "data"),
            State("select-samples", "value"),
            State("sample_order", "data"),
        ],
    )
    def update_figure(
        selected_batch,
        n_clicks,
        label_dict,
        data,
        custom_config,
        sample_list,
        sample_order,
    ):
        # print("call - update_figure")
        if selected_batch is None:
            # print("PreventUpdate - update_figure")
            raise PreventUpdate

        error_msg = None

        # Load dataframe from memory
        df = pd.read_json(data["df"], orient="split")

        # Add metadata to dataframe
        df.metadata = ""
        df.metadata = data["metadata"]

        # Rename sample labels
        if label_dict:
            names_dict = label_dict
        else:
            names_dict = {}

        # Reorder sample_list by sample_order
        sample_sortlist = []
        if sample_order:
            for i in sample_order:
                if i in sample_list:
                    sample_sortlist.append(i)
        # Add remaining samples that were not in sample_order
        for i in sample_list:
            if i not in sample_sortlist:
                sample_sortlist.append(i)

        # Create figure
        if custom_config is None:  # If custom_config settings are not provided
            fig = dash_bio.VariantMap(
                df,
                batch_no=selected_batch,
                sample_order=sample_sortlist,
                sample_names=names_dict,
            )

        else:
            # Slicing dataframe by variant indexes
            annotation = {}
            try:
                if custom_config["index_list"]:
                    # Test if SV indexes exist in data
                    _ = df.loc[custom_config["index_list"], :]
                    annotation["index_list"] = custom_config["index_list"]
            except KeyError:
                error_msg = "ERROR: Selected variant indexes not found in data."

            # Preparing annotation filters
            for name in data["metadata"]["annotation"]:
                if name != "GTF":
                    annotation[name] = custom_config[name]

            annotation["Gene_name"] = custom_config["Gene_name"]
            annotation["Gene_type"] = custom_config["Gene_type"]
            annotation["Gene_feature"] = custom_config["Gene_feature"]

            # Assign VariantMap plot to fig
            fig = dash_bio.VariantMap(
                df,
                entries_per_batch=custom_config["entries"],
                batch_no=selected_batch,
                annotation=annotation,
                filter_sample=custom_config["filter_sample"],
                filter_file=custom_config["filter_file"],
                sample_order=sample_sortlist,
                sample_names=names_dict,
            )

        # Children for variantmap-fig
        child_fig = [
            dcc.Graph(id="variantmap", figure=fig, config={"scrollZoom": True})
        ]
        return child_fig, error_msg

    # Callback upon clicking on data points on heatmap
    @app.callback(Output("info-tab", "children"), [Input("variantmap", "clickData")])
    def display_click_data(clickdata):
        if clickdata is None:
            raise PreventUpdate
        points = clickdata["points"][0]
        hovertext = points["hovertext"]
        hoverline = []
        for x in hovertext.split("<br>"):
            if x:
                hoverline.append(x)
                hoverline.append(html.Br())
            else:  # if blank line
                hoverline.append(html.Br())
        child_info = [
            html.Div("Click on variant to display its information"),
            html.Br(),
            html.Div(children=hoverline),
        ]
        return child_info


app = run_standalone_app(layout, callbacks, header_colors, __file__)
server = app.server

if __name__ == '__main__':
    app.run_server(debug=True, port=8050)

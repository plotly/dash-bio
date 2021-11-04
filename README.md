# Dash Bio
[![CircleCI](https://circleci.com/gh/plotly/dash-bio/tree/master.svg?style=svg)](https://circleci.com/gh/plotly/dash-bio)
[![PyPI version](https://badge.fury.io/py/dash-bio.svg)](https://badge.fury.io/py/dash-bio)

Dash Bio is a suite of bioinformatics components built to work with
[Dash](https://github.com/plotly/dash/).

Announcement: https://medium.com/@plotlygraphs/announcing-dash-bio-ed8835d5da0c

Demo:
[https://dash-gallery.plotly.host/Portal/?search=Bioinformatics](https://dash-gallery.plotly.host/Portal/?search=Bioinformatics)

Documentation:
[https://dash.plotly.com/dash-bio](https://dash.plotly.com/dash-bio)

## Components

The Dash Bio components each fall into one of three categories:

- Custom chart types
- Sequence analysis tools
- 3D rendering tools


### Custom chart types

- Dash Circos
- Dash Clustergram
- Dash Manhattan Plot
- Dash Needle Plot
- Dash Volcano Plot

### Sequence analysis tools

- Dash Alignment Chart
- Dash Onco Print
- Dash Forna Container
- Dash Sequence Viewer

### Visualization tools

- Dash Mol2D
- Dash Mol3D
- Dash Speck
- Dash Ngl


## Using Dash Bio

It's easy to add a fully interactive chromosomal, molecular or genomic visualization to your Dash app by simply
including the Dash Bio component into your app layout as follows:

```python
import urllib.request as urlreq
from dash import Dash, html
import dash_bio as dashbio

app = Dash(__name__)

data = urlreq.urlopen(
    'https://raw.githubusercontent.com/plotly/dash-bio-docs-files/master/alignment_viewer_p53.fasta'
).read().decode('utf-8')

app.layout = html.Div([
    dashbio.AlignmentChart(
        id='my-default-alignment-viewer',
        data=data
    )
])

if __name__ == '__main__':
    app.run_server(debug=True)
```

See the [Dash Bio documentation](https://dash.plotly.com/dash-bio) for more components and examples.


## Run Dash Bio in a JupyterLab environment

1. Create a virtual environment:

    The following steps require a virtual environment tool to be installed on your computer: `pip install virtualenv`

    a. On macOS and Linux: `python3 -m venv env`

    b. On Windows, enter: `py -m venv env`

2. Activate your new environment:

    a. On macOS and Linux, enter: `source env/bin/activate`

    b. On Windows, enter: `.\env\Scripts\activate`

3. Install required libraries (make sure you have pip installed with `pip help`):
```
pip install dash dash-bio pandas numpy Jupyterlab
```

4. To run Dash inside Jupyter lab:

    a. Install jupyter-dash:  `pip install jupyter-dash`

    b. Enter `jupyter lab build`

    (Note: This step requires Node.js and NPM installed on yourcomputer. To check if Node and NPM are installed, enter `node -v` and `npm -v` in your terminal. For install instructions see [nodejs.org](https://nodejs.org/en/).

5. To display Plotly figures in JupyterLab:
```
pip install jupyterlab "ipywidgets>=7.5”
jupyter labextension install jupyterlab-plotly@4.14.3
```

6. Start JupyterLab by typing: `jupyter lab`

    Important: JupyterLab must be run within the virtual environment that was previously activated.


For more on running a Dash app in Jupyter Lab visit [Getting Started with Jupyter Dash](https://github.com/plotly/jupyter-dash/blob/master/notebooks/getting_started.ipynb).

## Dash

Learn more about Dash at
[https://plotly.com/products/dash/](https://plotly.com/products/dash/).

## Consulting and OEM

For inquiries about Dash app development, advanced OEM integration,
and more, please [reach
out](https://plotly.typeform.com/to/mH1Cpb).

## Contributing and Local Development

If you would like to contribute to this repository, or run demo apps and tests, please refer to
the [contributing
guidelines](https://github.com/plotly/dash-bio/blob/master/CONTRIBUTING.md).

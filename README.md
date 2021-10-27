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

## Run the app in a Jupyter Lab environment

1. Create a virtual environment:

    a. On macOS and Linux, type: `python3 -m venv env`

    b. On Windows, type: `py -m venv env` 

    For these steps you need to have virtual environment be installed on your
    computer. Do it by using the command: `pip install virtualenv`

2. Activate your new environment:

    a. On macOS and Linux, type: `source env/bin/activate`

    b. On Windows, type: `.\env\Scripts\activate`

3. Install required libraries: (make sure you have pip installed with pip help)

    a. pip install numpy==1.18.1

    b. pip install pandas==1.0.0

    c. pip install dash==1.19.0

    d. pip install Jupyterlab==2.2.9

4. To run Dash inside Jupyter lab:

    a. Type: pip install jupyter-dash

    b. Type: jupyter lab build (this step needs Node.js and NPM installed on your
    computer. To check whether you have Node and NPM on your computer, just type
    node -v and npm -v into command prompt. If you need to install these packages,
    go to https://nodejs.org/en/)

5. To run Plotly figures inside jupyter lab:

    a. Type: pip install jupyterlab "ipywidgets>=7.5”
    b. Type: jupyter labextension install jupyterlab-plotly@4.14.3
    (aslo requires Node.js and NPM)

6. Start Jupyterlab by typing: `jupyter lab`

Important: you need to run jupyter lab with activating virtual environment.

## Run on port e.g. 8060 instead of port 8050 which is default

As we can see in Dash.run_server method definition,
port can be passed as parameter:

`def run_server(self,
               port=8050,
               debug=True,
               threaded=True,
               **flask_run_options):
    self.server.run(port=port, debug=debug, **flask_run_options)`

So, if you need to use another port:

`if __name__ == '__main__':
    app.run_server(debug=True, port=8051) # or whatever you choose`
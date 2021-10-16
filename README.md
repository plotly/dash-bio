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

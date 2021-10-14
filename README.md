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
- Dash Ngl (experimental)

## Dash

Learn more about Dash at
[https://plotly.com/products/dash/](https://plotly.com/products/dash/).

## Consulting and OEM

For inquiries about Dash app development, advanced OEM integration,
and more, please [reach
out](https://plotly.typeform.com/to/mH1Cpb).

## Contributing

If you would like to contribute to this repository, please refer to
the [contributing
guidelines](https://github.com/plotly/dash-bio/blob/master/CONTRIBUTING.md).

## Run the project

You need to clone the project from this GitHub repository
using the command:

`git clone https://github.com/plotly/dash-bio.git`

Then use `npm install` command to install all of npm dependencies.

After that you need to install python on your computer and add python to the PATH.
If you already have python added to the PATH, go to the app folder you would like
to run using the command `cd test\dashbio-demos\{APP_YOU_WANT_TO_RUN}`.
Then use the command `python app.py`.

## Run tests

To run tests locally you need to install all python packages from the project
and before you do it I recommend you create a virtual environment
for the dash-bio project. Then use the command from the main directory of the
project which is called dash-bio:
`pip install -r requirements.txt.`

Next, use the commands:

`pip install dash[testing]`

`pip install dash-bio`

After that you could run all tests:

`pytest test\integration`

or run test for only one app:

`pytest tests\integration\test_app_you_want_to_test`

To run the suite of unit tests:

`pip install dash_bio_utils`

`python tests\unit\unit_test_data_setup.py`

`npm run test`

## Js components

All js components for apps are in the `src\lib\components and src\lib\fragments`. 
If you made some changing to js components you need to rebuild your project:

`pip uninstall -y dash-bio`

`npm run build`

`pip install .`
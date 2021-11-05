# Dash Bio Utils

Dash Bio utils is a set of helper scripts that work together with the
[`dash-bio`](https://github.com/plotly/dash-bio) package.

## Dash

Learn more about Dash at
[https://plot.ly/products/dash/](https://plot.ly/products/dash).

## Consulting and OEM

For inquiries about Dash app development, advanced OEM integration,
and more, please [reach out](https://plotly.typeform.com/to/mH1Cpb).

## Contributing

If you would like to contribute to this repository, please refer to
the [contributing
guidelines](https://github.com/plotly/dash-bio-utils/blob/master/CONTRIBUTING.md).

### Running tests

Create and activate a new virtualenv:

```bash
python3 -m venv venv
source venv/bin/activate
pip install pytest
```

or a conda env:

```bash
conda create -n dash-bio-utils python=3.7
source activate dash-bio-utils
conda config --add channels conda-forge
conda install pytest
```

Clone this repo, install the `dash-bio-utils` package, and run its tests:

```bash
git clone https://github.com/plotly/dash-bio-utils.git
cd dash-bio-utils/
python setup.py install
python -m pytest tests/
```

If you are setting breakpoints with [ipdb](https://pypi.org/project/ipdb/), you
want to disable capturing on the command line:

```bash
python -m pytest -s tests/
```

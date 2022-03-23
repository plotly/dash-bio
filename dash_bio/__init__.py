from __future__ import print_function as _
from __future__ import absolute_import
import os as _os
import sys as _sys
import json

import dash as _dash

from .component_factory._manhattan import ManhattanPlot
from .component_factory._volcano import VolcanoPlot
from .component_factory._clustergram import Clustergram
from .component_factory._variant import VariantMap

if not hasattr(_dash, '__plotly_dash') and not hasattr(_dash, 'development'):
    print('Dash was not successfully imported. '
          'Make sure you don\'t have a file '
          'named \n"dash.py" in your current directory.', file=_sys.stderr)
    _sys.exit(1)

_basepath = _os.path.dirname(__file__)
_filepath = _os.path.abspath(_os.path.join(_basepath, 'package-info.json'))
with open(_filepath) as f:
    package = json.load(f)

package_name = package['name'].replace(' ', '_').replace('-', '_')
__version__ = package['version']

from . import utils  # noqa: F401,E402
from ._imports_ import *  # noqa: F401, F403, E402
from ._imports_ import __all__  # noqa: E402

async_resources = [
    'alignment',
    'circos',
    'ideogram',
    'igv',
    'pileup',
    'moleculeviewer2',
    'moleculeviewer3',
    'needle',
    'nglmoleculeviewer',
    'onco',
    'sequence',
    'speck',
    'jsme'
]

_js_dist = []

_js_dist.extend([{
        'relative_package_path': 'async-{}.js'.format(async_resource),
        'external_url': (
            'https://unpkg.com/dash-bio@{}'
            '/' + package_name + '/async-{}.js'
        ).format(__version__, async_resource),
        'namespace': 'dash_bio',
        'async': True
    } for async_resource in async_resources])

_js_dist.extend([{
        'relative_package_path': 'async-{}.js.map'.format(async_resource),
        'external_url': (
            'https://unpkg.com/dash-bio@{}'
            '/' + package_name + '/async-{}.js.map'
        ).format(__version__, async_resource),
        'namespace': 'dash_bio',
        'dynamic': True
    } for async_resource in async_resources])

_js_dist.extend([
    {
        'relative_package_path': 'bundle.js',
        'external_url': (
            'https://unpkg.com/dash-bio@{}'
            '/' + package_name + '/bundle.js'
        ).format(__version__),
        'namespace': package_name
    },
    {
        'relative_package_path': 'bundle.js.map',
        'external_url': (
            'https://unpkg.com/dash-bio@{}'
            '/' + package_name + '/bundle.js.map'
        ).format(__version__),
        'namespace': package_name,
        'dynamic': True
    }
])

_js_dist.extend(
    [
        {
            'relative_package_path': 'dash_bio-shared.js',
            'external_url': (
                    'https://unpkg.com/dash-bio@{}'
                    '/' + package_name + '/dash_bio-shared.js'
            ).format(__version__),
            'async': True,
            'namespace': 'dash_bio'
        },
        {
            "relative_package_path": "{}-shared.js.map".format(__name__),
            "external_url": (
                "https://unpkg.com/dash-bio@{}"
                "/dash_bio/dash_bio-shared.js.map"
            ).format(__version__),
            "namespace": "dash_bio",
            "dynamic": True,
        }
    ]
)


for _component in __all__:
    setattr(locals()[_component], "_js_dist", _js_dist)

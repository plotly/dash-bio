import os
import json
import sys

package_file = os.path.abspath(os.path.join(os.path.dirname(__file__), 'package.json'))

with open(package_file) as f:
    package = json.load(f)

package_info = dict(
    name=package['name'].replace(' ', '_').replace('-', '_'),
    version=package['version'],
    author=package['author']
)

package_info_file = os.path.abspath(os.path.join(
    os.path.dirname(__file__), os.path.join(
        'dash_bio', 'package-info.json'
    )
))

with open(package_info_file, 'w') as f:
    f.write(json.dumps(package_info))

import json
import os
from setuptools import setup


with open(os.path.join('dash_bio', 'package.json')) as f:
    package = json.load(f)

package_name = package["name"].replace(" ", "_").replace("-", "_")

setup(
    name=package_name,
    version=package["version"],
    author=package['author'],
    packages=[package_name, '{}/utils'.format(package_name), '{}/component_factory'.format(package_name)],
    include_package_data=True,
    description=package['description'] if 'description' in package else package_name,
    install_requires=[
        'biopython',
        'colour',
        'dash',
        'dash-html-components',
        'pandas',
        'parmed',
        'plotly',
        'scipy',
        'sklearn'
    ],
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
)

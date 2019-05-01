import json
import os
from setuptools import setup
from io import open

filepath = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'README.md')
with open(filepath, encoding='utf-8') as f:
    long_description = f.read()

with open(os.path.join('dash_bio', 'package.json'), encoding='utf-8') as f:
    package = json.load(f)

package_name = package["name"].replace(" ", "_").replace("-", "_")

setup(
    name=package_name,
    version=package["version"],
    url='http://github.com/plotly/{}'.format(package_name.replace('_', '-')),
    author=package['author'],
    author_email='shammamah@plot.ly',
    packages=[package_name, '{}/utils'.format(package_name), '{}/component_factory'.format(package_name)],
    include_package_data=True,
    description=package['description'] if 'description' in package else package_name,
    long_description=long_description,
    long_description_content_type='text/markdown',
    install_requires=[
        'biopython',
        'colour',
        'dash>=0.40.0',
        'GEOparse>=1.1.0',
        'pandas',
        'parmed',
        'plotly',
        'scipy',
        'scikit-learn>=0.20.1'
    ],
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
)

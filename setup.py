import os
import io
from setuptools import setup

filepath = os.path.abspath(os.path.dirname(__file__))

long_description = io.open('README.md', encoding='utf-8').read()

package = {
    'name': os.path.basename(filepath).replace('-', '_'),
    'version': '0.0.3',
    'author': 'The Plotly Team',
    'author_email': 'dashbio@plot.ly',
    'description': 'Simple parsing tools that supplement dash-bio.'
}

setup(
    name=package['name'],
    version=package['version'],
    url='http://github.com/plotly/{}'.format(package['name'].replace('_', '-')),
    author=package['author'],
    author_email='dashbio@plot.ly',
    packages=[package['name']],
    include_package_data=True,
    description=package['description'],
    long_description=long_description,
    long_description_content_type='text/markdown',
    install_requires=[
        'biopython',
        'colour',
        'GEOparse>=1.1.0',
        'jsonschema',
        'pandas',
        'parmed',
        'periodictable',
        'requests'
    ],
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent"
    ]
)

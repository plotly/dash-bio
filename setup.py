from setuptools import setup
import os

filepath = os.path.abspath(os.path.dirname(__file__))

with open(os.path.join(filepath, 'README.md'), encoding='utf-8') as f:
    long_description = f.read()

package = {
    'name': os.path.basename(filepath).replace('-', '_'),
    'version': '0.0.0rc1',
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
    description=package['description'],
    long_description=long_description,
    long_description_content_type='text/markdown',
    install_requires=[
        'biopython',
        'colour',
        'GEOparse>=1.1.0',
        'pandas',
        'parmed'
    ],
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent"
    ]
)

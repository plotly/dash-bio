import os
import io
from setuptools import setup

long_description = io.open('README.md', encoding='utf-8').read()

setup(
    name='dash_bio_utils',
    version='0.0.7',
    url='http://github.com/plotly/dash-bio-utils',
    author='The Plotly Team',
    author_email='dashbio@plot.ly',
    packages=['dash_bio_utils'],
    include_package_data=True,
    description='Simple parsing tools that supplement dash-bio.',
    long_description=long_description,
    long_description_content_type='text/markdown',
    install_requires=[
        'biopython>=1.77;python_version>="3.0"',
        'biopython==1.76;python_version=="2.7"',
        'colour',
        'GEOparse>=1.1.0',
        'jsonschema',
        'pandas',
        'parmed',
        'periodictable',
        'requests',
    ],
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent"
    ]
)

import csv

'''
A simple tab-delimited parser for the ideogram, that parses data from NCBI 
genome ideogram data. The simple function below returns an array, containing
the rows of the dataset as strings.

NCBI Genome Ideogram data bank: ftp://ftp.ncbi.nlm.nih.gov/pub/gdp/ (grab data from here)
NCBI Genome Decoration Page: https://www.ncbi.nlm.nih.gov/genome/tools/gdp

Ex: 

from dash_bio.utils import ideogramParser as ideoParser
parsed_data = ideoParser.ncbi_gdp_to_json('./ideogram_10116_GCF_000000225.4_NA_V1')

    dash_bio.DashIdeogram(
        localOrganism=parsed_data
        ...
        )
'''

def ncbi_gdp_to_json(file_location=""):
    dataset_container = []
    with open(file_location) as tsv:
        for line in csv.reader(tsv, delimiter="\t"): 
            thing = ' '.join(str(row) for row in line)
            dataset_container.append(thing)
    del dataset_container[0]
    return dataset_container

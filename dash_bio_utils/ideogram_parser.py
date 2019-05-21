"""A simple tab-delimited parser for the ideogram, that parses data
 from the NCBI Genome Ideogram data bank. The function below returns
 an array, containing the rows of the dataset as strings.

 NCBI Genome Ideogram data bank: ftp://ftp.ncbi.nlm.nih.gov/pub/gdp/
 (grab data from here) NCBI Genome Decoration Page:
 https://www.ncbi.nlm.nih.gov/genome/tools/gdp

 Example:

     from dash_bio_utils import ideogramParser as ideoParser
     parsed_data = \
     ideoParser.ncbi_gdp_to_array('./ideogram_10116_GCF_000000225.4_NA_V1')

     dash_bio.DashIdeogram(
         localOrganism=parsed_data
         ...
      )

"""

import csv


def ncbi_gdp_to_list(file_location="", header_rows=1):
    """
    Convert NCBI Genome Ideogram data to a Python list for use with
    Ideogram.js

    :param file_location: The location of the file you want to parse, using a relative path.
    :param header_rows: The header rows you want to remove from your dataset.
    :returns: A list containing the NCBI Genome Ideogram data, where each index
    contains a row of the data set as a string.
    """

    dataset_container = []
    try:
        with open(file_location) as tsv:
            for line in csv.reader(tsv, delimiter="\t"):
                row_string = ' '.join(str(row) for row in line)
                dataset_container.append(row_string)
            for x in range(header_rows):

                del dataset_container[x]
            return dataset_container
    except Exception as e:
        print(e)

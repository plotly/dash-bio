import json
import urllib.request


class UniprotQuery(object):
    """class which handles the query of gff files from the UniProt database
        build following https://www.uniprot.org/help/api_queries
    """
    def __init__(self):
        self._base_url = "https://www.uniprot.org/uniprot/"
        self._base_query = "?query=%s"
        self._field_separator = "+AND+"
        self._parameter_separator = "&"
        # https://www.uniprot.org/help/api_queries
        self._query_parameters = {
            "format": [
                "html",
                "tab",
                "xls",
                "fasta",
                "gff",
                "txt",
                "xml",
                "rdf",
                "list",
                "rss",
            ],
            "columns": [
                "citation",
                "clusters",
                "comments",
                "domains",
                "domain",
                "ec",
                "id",
                "entry name",
                "existence",
                "families",
                "features",
                "genes",
                "go",
                "go-id",
                "interactor",
                "keywords",
                "last-modified",
                "length",
                "organism",
                "organism-id",
                "pathway",
                "protein names",
                "reviewed",
                "sequence",
                "3d",
                "version",
                "virus hosts",
            ],
            "sort": ['score'],
            "include": ["yes", "no"],
            "compress": ["yes", "no"],
            "limit": 'int',
            "offset": 'int',
        }
        # https://www.uniprot.org/help/query-fields
        self._query_fields = [
            "accession",
            "active",
            "annotation",
            "author",
            "cdantigen",
            "citation",
            "cluster",
            "count",
            "created",
            "database",
            "ec",
            "evidence",
            "existence",
            "family",
            "fragment",
            "gene",
            "gene_exact",
            "goa",
            "host",
            "id",
            "inn",
            "interactor",
            "keyword",
            "length",
            "lineage",
            "mass",
            "method",
            "mnemonic",
            "modified",
            "name",
            "organelle",
            "organism",
            "plasmid",
            "proteome",
            "proteomecomponent",
            "replaces",
            "reviewed",
            "scope",
            "sequence",
            "sequence_modified",
            "source",
            "strain",
            "taxonomy",
            "tissue",
            "web",
        ]

    def _validate_query_parameters(self, parameters=None):
        """compare the parameters with the allowed values and keys"""
        if parameters is None:
            parameters = {}

        validated_parameters = {}  # dictionary to return

        for key in parameters:
            if key in self._query_parameters:
                if key in ['limit', 'offset']:
                    if isinstance(parameters[key], int):
                        validated_parameters[key] = parameters[key]
                elif key == 'format':
                    if parameters[key] in self._query_parameters[key]:
                        validated_parameters[key] = parameters[key]
                elif key == 'columns':
                    # replace '+' by a space and separate the commas
                    column_entry = parameters[key].replace('+', ' ').split(',')

                    set_a = set(self._query_parameters[key])
                    set_b = set(column_entry)
                    validated_items = set_a.intersection(set_b)  # disordered set
                    validated_column_entry = []  # ordered list
                    for item in column_entry:
                        # reorder the set in a list to keep the same order as the entry
                        if item in validated_items:
                            validated_column_entry.append(item)
                    validated_parameters[key] = ",".join(validated_column_entry).replace(' ', '+')
                elif key in ['include', 'compress', 'sort']:
                    if parameters[key] in self._query_parameters[key]:
                        validated_parameters[key] = parameters[key]

        return validated_parameters

    def build_query(self, query, fields=None, parameters=None):
        """
        param (str) query : the name of the sequence on UnitProt
        param (dict) fields : see https://www.uniprot.org/help/query-fields
            default = {}
        param (dict) parameters : see https://www.uniprot.org/help/api_queries
            default = {}
        """
        if fields is None:
            fields = {}
        if parameters is None:
            parameters = {}

        url = self._base_url + self._base_query % query

        for key in fields:
            if key in self._query_fields:
                if isinstance(fields[key], str):
                    url = url + self._field_separator + key + ":" + fields[key]
                else:
                    raise ValueError(
                        "The value of the field %s is not a string format, please "
                        "refer to https://www.uniprot.org/help/query-fields")

        validated_parameters = self._validate_query_parameters(parameters)
        for key in validated_parameters:
            url = url + self._parameter_separator + key + "=" + validated_parameters[key]

        return url

    def query_into_file(self, query, fname="", fields=None, parameters=None):
        target_url = self.build_query(query, fields=fields, parameters=parameters)
        print(target_url)
        with urllib.request.urlopen(target_url) as url:
            content = url.read()

            ofs = open(fname, 'wb')
            ofs.write(content)
            ofs.close()

    def query_into_pandas(self, query, fields=None, parameters=None):
        target_url = self.build_query(query, fields=fields, parameters=parameters)
        with urllib.request.urlopen(target_url) as url:
            print(url.read())


# https://biopython.org/wiki/GFF_Parsing


if __name__ == "__main__":

    import pandas as pd
    db = pd.read_csv("TP53_regions.gff",delimiter="\t", skiprows=1, header=None,
                     names=['name','db','mut','start','end','x1','x2','x3','note'])
    print(db.columns.values)
    print(db[db.mut == 'Region'])


    # 'Natural Variant' appear more than once, so I need to count their instances to get a value
    # Need to pop them as I create the file with value
    # Of loop over the starts and only process if the return pd doesn't have the field already

    # e = UniprotQuery()
    #
    # e.query_into_file(
    #     "TP53",
    #     fname="TP53_regions.gff",
    #     fields=dict(
    #         revieved='yes',
    #         organism='9606',
    #         database='pfam',
    #         accession='P04637',
    #     ),
    #     parameters=dict(
    #         # columns="id,entry+name,reviewed,domains,domain,length,genes,organism",
    #         # sort="score",
    #         format='gff'
    #     )
    # )

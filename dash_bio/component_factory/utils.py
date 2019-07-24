def _get_hover_text(df, snpname=None, genename=None, annotationname=None):
    """Format the hover text used in Manhattan and Volcano plots.
    :param (dataFrame) df: A pandas dataframe.
    :param (string) snpname: A string denoting the column name for the SNP
    names (e.g., rs number). More generally, this column could be anything
    that identifies each point being plotted. For example,
    in an Epigenomewide association study (EWAS), this could be the probe
    name or cg number. This column should be a character. This argument is
    optional, however it is necessary to specify it if you want to
    highlight points on the plot using the highlight argument in the
    figure method.
    :param (string) genename: A string denoting the column name for the
    GENE names.
    :param (string) annotationname: A string denoting the column name for
    annotations. This could be any annotation information that you
    want to include in the plot (e.g., zscore, effect size, minor allele
    frequency).
    """
    hover_text = ''
    if snpname is not None and snpname in df.columns:
        hover_text = 'SNP: ' + df[snpname].astype(str)

    if genename is not None and genename in df.columns:
        hover_text = hover_text \
                     + '<br>GENE: ' \
                     + df[genename].astype(str)

    if annotationname is not None and annotationname in df.columns:
        hover_text = hover_text \
                     + '<br>' \
                     + df[annotationname].astype(str)

    return hover_text

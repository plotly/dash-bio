import pandas as pd
import tempfile


def parse_tsv(
        contents, rowLabelsSource=None,
        rows=None, columns=None,
        headerRows=5, headerCols=2
):
    tf = tempfile.NamedTemporaryFile(mode='w+', delete=False)
    tf.write(contents)
    tf.close()
    df = pd.read_csv(tf.name, sep='\t', skiprows=headerRows-1)

    data = {}
    
    rows = ['NAC001', 'ARV1', 'MIR838A']
    columns = ['leaf', 'flower', 'fruit']

    selectedRows = []
    selectedCols = []

    allRows = []
    if(rowLabelsSource is not None
       and rowLabelsSource in df.keys().tolist()):
        allRows = df[rowLabelsSource].tolist()
        
    allCols = df.keys().tolist()[headerCols:]
    if rows is not None and columns is not None:
        for r in rows:
            if r not in allRows:
                continue
            selectedRows.append(r)
        selectedRows = list(map(lambda x: allRows.index(x), selectedRows))

        for c in columns:
            if c not in allCols:
                continue
            selectedCols.append(c)

        selectedData = df.loc[selectedRows, selectedCols]
        data = selectedData.values
    
    desc = {}
    info = pd.read_csv(tf.name, sep='^', nrows=headerRows-1, header=None)[0]
    for i in info:
        tmp = i.strip('#').split(':', 1)
        if(len(tmp) < 2):
            desc['Source'] = tmp[0]
            continue
        desc[tmp[0]] = tmp[1]

    return(data, desc, allRows, allCols)

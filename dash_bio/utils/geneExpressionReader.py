import base64
import numpy as np


def parse_tsv(contents, filename):
    content_string = ''
    rowLabels = []
    colLabels = []
    desc = {}
    data = {}
    dataShape = 0
    if(contents is not None):
        content_type, content_string = contents.split(',')
    decoded = base64.b64decode(content_string).decode('UTF-8')
    lines = decoded.split('\n')[1:2000]
    desc['Source'] = decoded.split('\n')[0].strip('#').strip(' ')
    for line in lines:
        if(len(line) > 0 and (line[0] == '#' or line.split(' ')[0] == 'Gene')):
            if(':') not in line:
                colLabels = line.strip('#').split('\t')[2:]
            else:
                desc[line.split(':')[0].strip('#').strip(' ')] = \
                            line.split(':')[1].strip(' ')
        else:
            row = line.split('\t')
            if(len(row) < 2):
                continue
            rowLabels.append([row[0], row[1]])
            for i in range(2, len(row)):
                try:
                    data = np.append(data, float(row[i]))
                except ValueError:
                    data = np.append(data, np.nan)
    dataShape = len(colLabels)
    data = np.reshape(data[1:], (int(len(data)/dataShape), dataShape))

    return(data, desc, rowLabels, colLabels)

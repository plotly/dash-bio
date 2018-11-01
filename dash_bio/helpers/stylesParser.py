import sys
import numpy as np
import json

# def createStyle(pdbPath, style, chainsDict=None, atmColor=None):
def createStyle(pdbPath, style):
    datS=""
    ## Read input file
    with open (pdbPath, 'r') as infile:
        lines=infile.readlines()

    #Define dictionary of atom and chain colors
    #if (chainsDict is None):
    chainsDict = {
        "A":"#00ff00",
        "B":"#0000ff",
        "C":"#ff0000",
        "D":"#00ffff",
        "E":"#ff00ff",
        "F":"#ffff00",
        "G":"#4daeb4",
        "H":"#daf1ff",
        "I":"#c57ea8",
        "J":"#dbff33",
        "K":"#75FF33",
        "L":"##FFBD33",
        "M":"#400040",
        "N":"#004000",
        "O":"#008080",
        "P":"#008080"
    }

    #if (atmColor is None):
    atmColor = {
        "C":"#c0c0c0",
        "H":"#ffffff",
        "N":"#0000ff",
        "S":"#ffff00",
        "O":"#ff0000",
        "F":"#ffff00",
        "P":"#ff5733",
        "K":"#42f4ee",
        "G":"#3f3f3f"
    }

    chain=[]; atmType=[]
    ct=0
    ct1=0
    data={}
    for i in lines:
        l=i.split()
        if("ATOM" in l[0] or "HETATM" in l[0]):
            chain.append(i[21:22].strip())
            atmType.append(i[77:78])


    for i in lines:
        l=i.split()

        if("ATOM" in l[0] or "HETATM" in l[0]):

            index=str(ct1)
            if(l[0]=="ATOM"):
                if (style == 'stick'):
                    data[index]={
                        "color":atmColor[atmType[ct1]],
                        "visualization_type":"stick"
                    }
                else:
                    data[index]={
                        "color":chainsDict[chain[ct1]],
                        "visualization_type":style
                    }

            else:
                data[index]={
                    "color":atmColor[atmType[ct1]],
                    "visualization_type":"stick"
                    }
            ct1 += 1

    return (json.dumps(data))
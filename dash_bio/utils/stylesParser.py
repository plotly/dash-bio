import sys
import numpy as np
import json

def createStyle(pdbPath, style, chainsDict=None, atmColor=None):
    '''
    Function to create the different styles (stick, cartoon, sphere) using the
    protein data bank (PDB) file as input. This function outputs the styles as a JSON file

    @param pdbPath 
    Name of the biomolecular structure file in PDB format

    @param chainsDict
    optional parameter to specify the color scheme for different chains in JSON format

    @param atmColor
    optional parameter to specify the color scheme for different atoms in JSON format
    '''
    datS=""
    ## Read input file
    with open (pdbPath, 'r') as infile:
        ## store only non-empty lines
        lines=[l.strip() for l in infile if l.strip()]

    ## Define dictionary of atom and chain colors
    if (chainsDict is None):
        chainsDict = {
            "A":"#32cd32",
            "B":"#8a2be2",
            "C":"#ff4500",
            "D":"#00bfff",
            "E":"#ff00ff",
            "F":"#ffff00",
            "G":"#4682b4",
            "H":"#ffb6c1",
            "I":"#a52aaa",
            "J":"#ee82ee",
            "K":"#75FF33",
            "L":"#FFBD33",
            "M":"#400040",
            "N":"#004000",
            "O":"#008080",
            "P":"#008080"
        }

    if (atmColor is None):
        atmColor = {
            "C":"#c8c8c8",
            "H":"#ffffff",
            "N":"#8f8fff",
            "S":"#ffc832",
            "O":"#f00000",
            "F":"#ffff00",
            "P":"#ffa500",
            "K":"#42f4ee",
            "G":"#3f3f3f"
        }


    ## Create the styles files in JSON format
    chain=[]; atmType=[]
    ct=0
    ct1=0
    data={}
    for i in lines:
        l=i.split()
        if("ATOM" in l[0] or "HETATM" in l[0]):
            chain.append(i[21:22].strip())
            atmType.append(i[77:78])

            index=str(ct1)
            if(l[0]=="ATOM"):
                if (style == 'stick'):
                    if atmType[ct1] in atmColor:
                        data[index]={
                            "color":atmColor[atmType[ct1]],
                            "visualization_type":"stick"
                        }
                    else:
                        data[index]={
                            "color":"#330000",
                            "visualization_type":"stick"
                        }
                else:
                    data[index]={
                        "color":chainsDict[chain[ct1]],
                        "visualization_type":style
                    }

            else:
                if atmType[ct1] in atmColor:
                    data[index]={
                        "color":atmColor[atmType[ct1]],
                        "visualization_type":"stick"
                    }
                else:
                    data[index]={
                        "color":"#330000",
                        "visualization_type":"stick"
                    }
            ct1 += 1

    return (json.dumps(data))
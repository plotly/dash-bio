## USAGE: python pdbStyles <pdb_file_name> 

import sys
import numpy as np
import mdtraj as md
import json

#pdb_file = sys.argv[1]

def double_quote(resName):
    return "{}".format(resName)


def createStyle(pdbPath, style):
    datS=""
    ## Read input file
    with open (pdbPath) as infile:
        lines=[line for line in infile]

    ## Read the PDB file using mdtraj to get information about the PDB file
    topology = md.load(pdbPath).topology
    atoms, bonds = topology.to_dataframe()

    natoms = topology.n_atoms

    #Define dictionary of atom and chain colors
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

    #print ("{ ", end="")

    serial=[]; atmName=[]; resName=[]; chain=[]; resId=[]; positions=[]; occupancy=[]; tempFactor=[]; atmType=[]
    ct=0
    for i in lines:
        l=i.split()
        if("ATOM" in l[0] or "HETATM" in l[0]):
            serial.append(i) #int(i[6:11]))
            atmName.append(i[12:16].strip())
            # print ("Serial, atmName", serial, atmName)
            resName.append(i[17:20].strip())
            chain.append(i[21:22].strip())
            resId.append(int(i[22:26]))
            x = float(i[30:38])
            y = float(i[38:46])
            z = float(i[46:54])
            positions.append([x,y,z])
            occupancy.append(i[54:60].strip())
            tempFactor.append(i[60:66].strip())
            atmType.append(i[77:78])
            ct+=1

    ct1=0
    index=0
    dat=""
    for i in lines:
        l=i.split()

        if("ATOM" in l[0] or "HETATM" in l[0]):

            index=double_quote(ct1)
            if(l[0]=="ATOM"):
                if (style == 'stick'):
                    dat={
                        "color":double_quote(atmColor[atmType[ct1]]),
                        "visualization_type":"stick"
                    }
                else:
                    dat={
                        "color":double_quote(chainsDict[chain[ct1]]),
                        "visualization_type":style
                    }
                # if(ct1 < len(serial)-1):
                #     print(json.dumps(index),":",json.dumps(dat), ",", sep="")
                # else:
                #     print(json.dumps(index),":",json.dumps(dat), sep="")
            else:
                dat={
                    "color":double_quote(atmColor[atmType[ct1]]),
                    "visualization_type":"stick"
                }
            if(ct1 < len(serial)-1):
                #print(json.dumps(index),":",json.dumps(dat), ",", sep="")
                datS += json.dumps(index) + ":" + json.dumps(dat) + ","
            else:
                datS += json.dumps(index) + ":" + json.dumps(dat)

            ct1 += 1

    datStyle= "{" + datS + "}"
    return (datStyle)
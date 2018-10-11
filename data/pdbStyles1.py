## USAGE: python pdbStyles <pdb_file_name> 

import sys
import numpy as np
import mdtraj as md
import json

pdb_file = sys.argv[1]

def double_quote(resName):
    return "{}".format(resName)

## Read input file
with open (pdb_file) as infile:
    lines=[line for line in infile]

## Read the PDB file using mdtraj to get information about the PDB file
topology = md.load(pdb_file).topology
atoms, bonds = topology.to_dataframe()

natoms = topology.n_atoms

#Define dictionary of chains and colors
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

dictChains = {
    0:"#00ff00",
    1:"#0000ff",
    2:"#ff0000",
    3:"#00ffff",
    4:"#ff00ff",
    5:"#ffff00",
    6:"#800000",
    7:"#000080",
    8:"#008000",
    9:"#f08080",
    10:"#dbff33",
    11:"#000020",
    12:"#400040",
    13:"#004000",
    14:"#008080",
    15:"#008080"
}

#viz_type=["stick", "cartoon", "sphere"]

print ("{ ", end="")

ct=0
serial=[]; atmName=[]; resName=[]; chain=[]; resId=[]; positions=[]; occupancy=[]; tempFactor=[]
for i in lines:
    l=i.split()
    # if(l[0] == "ATOM" or l[0] == "HETATM"):
    if("ATOM" in l[0] or "HETATM" in l[0]):
        serial.append(int(i[6:11]))
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

        ct+=1

ct1=0
for i in lines:
    l=i.split()
    #l=i[:6]
    # if(l[0] == "ATOM" or l[0] == "HETATM"):
    if("ATOM" in l[0] or "HETATM" in l[0]):
        # serial = (int(i[6:11]))
        # atmName = (i[12:16].strip())
        # # print ("Serial, atmName", serial, atmName)
        # resName = (i[17:20].strip())
        # chain = (i[21:22].strip())
        # resId = (int(i[22:26]))
        # x = float(i[30:38])
        # y = float(i[38:46])
        # z = float(i[46:54])
        # positions = ([x,y,z])
        # occupancy = (i[54:60].strip())
        # tempFactor = (i[60:66].strip())

        index=double_quote(ct1)
        if(l[0]=="ATOM"):
            dat={
                "color":double_quote(chainsDict[chain[ct1]]),
                "visualization_type":"cartoon"
            }
            if(ct1 < len(serial)-1):
                print(json.dumps(index),":",json.dumps(dat), ",", sep="")
            else:
                print(json.dumps(index),":",json.dumps(dat), sep="")
        else:
            if (ct1 < len(serial)-1):
                print(json.dumps(index),":{\"visualization_type\":\"line\"},", sep="")
            else:
                print(json.dumps(index),":{\"visualization_type\":\"line\"}", sep="")

        ct1+=1
print (" }", end="")
#print(ct,natoms)
import sys
import numpy as np
import mdtraj as md
import json

def double_quote(param):
    return "{}".format(param)

def createData(pdbPath):
    with open(pdbPath, 'r') as infile:
        lines=[line for line in infile]
        

pdb_file = sys.argv[1]

with open (pdb_file) as infile:
    lines=[line for line in infile]

positions=[]

print ("{\"bonds\": [",end="" )

topology = md.load(pdb_file).topology
table, bonds = topology.to_dataframe()


for i in range(len(bonds)):
    bond1=int(bonds[i][0])
    bond2=int(bonds[i][1])
    bondPairs = {"atom2_index":bond1,
        "atom1_index":bond2,
        # "bond_order":1 
        }
    if (i < len(bonds)-1):
        print (json.dumps(bondPairs), ",")
    else:
        print (json.dumps(bondPairs), sep="", end="")
    #print("{atom2_index:", bond1, ",atom1_index:", bond2, ",bond_order:",1, sep="", end=",")

# print ("],\"chains\":[", sep="", end="")

# for i in range(topology.n_chains):
#     print (">>>", topology.n_chains)
#     chainInfo = {
#     "name": chain[i],
#     "description": ""
#     }
#     print (chainInfo, end=",")

# print ("],", end="")

# print ("], \"residues\": [", sep="", end="")

# for j in range(topology.n_chains):
#     for k in range(topology.n_residues):
#         res_name=double_quote(topology.residue(k))
#         dat = {
#             "chain_index":j,
#             "name":res_name,
#             "sequence_number":k
#         }
#         print (json.dumps(dat), "," , sep="")

print ("], \"atoms\": [", end="")

serial=[]; atmName=[]; resName=[]; chain=[]; resId=[]; positions=[]; occupancy=[]; tempFactor=[]
ct=0

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
        #print ("\nserial, ct:", serial, ct, int(i[6:11]))
        
#print (len(chain), len(atmName))

for i in range(len(chain)): 
    resinfo = {
        "name": atmName[i],
        "chain": chain[i],
        "positions": positions[i],
        "residue_index": resId[i],
        "element": atmName[i],
        "residue_name": resName[i],
        "serial": serial[i],
    }
    if (i < len(chain)-1):
        print (json.dumps(resinfo), ",", sep="")
    else:
        print (json.dumps(resinfo), sep="")

#print (len(serial))


print ("]}", end="")

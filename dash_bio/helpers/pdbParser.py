import sys
import numpy as np
import mdtraj as md
import json
import io

def double_quote(param):
    return "{}".format(param)

def createData(pdbPath):
    with open(pdbPath, 'r') as infile:
       lines=infile.readlines() #[line for line in infile]
    lines1=io.StringIO(pdbPath)

    varNchains=[]; varNresidues=[]
    serial=[]; atmName=[]; resName=[]; chain=[]; resId=[]; positions=[]; occupancy=[]; tempFactor=[]; atomType=[]
    ct=0

    for i in lines:    
    #for i in lines1:
        l=i.split()
        if("ATOM" in l[0] or "HETATM" in l[0]):
            serial.append(int(i[6:11]))
            atmName.append(i[12:16].strip())
            val_rName=i[17:20].strip()
            resName.append(val_rName)
            chain_val=i[21:22].strip()
            chain.append(chain_val)
            if (not chain_val in varNchains):
                varNchains.append(chain_val)
            val_rId=int(i[22:26])
            resId.append(val_rId)
            x = float(i[30:38])
            y = float(i[38:46])
            z = float(i[46:54])
            positions.append([x,y,z])
            occupancy.append(i[54:60].strip())
            tempFactor.append(i[60:66].strip())
            atomType.append(i[77:79].strip())
            ct+=1
    ## Create list of atoms
    datA=""
    tmpRes=resId[0]
    resct=1
    for i in range(len(chain)): 
        if(tmpRes != resId[i]):
            tmpRes=resId[i]
            resct += 1
        resinfo = {
            "name": atmName[i],
            "chain": chain[i],
            "positions": positions[i],
            "residue_index": resct,
            "element": atomType[i],
            "residue_name": resName[i],
            "serial": i,
        }
        if (i < len(chain)-1):
            datA += json.dumps(resinfo) + ","
        else:
            datA += json.dumps(resinfo)


#def createBonds(pdbPath):
    dat=""
    topology = md.load(pdbPath).topology
    table, bonds = topology.to_dataframe()
    for i in range(len(bonds)):
        bond1=int(bonds[i][0])
        bond2=int(bonds[i][1])
        bondPairs = {"atom2_index":bond1,
            "atom1_index":bond2,
            }
        if (i < len(bonds)-1):
            dat+=(str(json.dumps(bondPairs)+","))
        else:
            dat+=str(json.dumps(bondPairs))
    bondDict="\"bonds\": ["+dat+"]"

    atomBondDict="{ \"bonds\": ["+dat+"], \"atoms\": [" + datA + "] }"
    return(atomBondDict)
import sys
import numpy as np
import parmed as pmd
import re
import json
import os
from shutil import copy2

def createData(pdbPath):
# def createData(pdbPath):
    '''
    Function to parse the protein data bank (PDB) file to generate the input modelData

    @param pdbPath
    Name of the biomolecular structure file in PDB format

    '''

    ## Create local copy of temp file
    copy2(pdbPath, './tmp.pdb')

    ## Use parmed to read the bond information from temp file
    top=pmd.load_file('tmp.pdb')

    ## Remove the created temp file
    os.remove("tmp.pdb")

    ## Read pdb file to create atom/bond information
    with open(pdbPath, 'r') as infile:
       ## store only non-empty lines
       lines=[l.strip() for l in infile if l.strip()]

    varNchains=[]; varNresidues=[]
    serial=[]; atmName=[]; resName=[]; chain=[]; resId=[]; positions=[]; occupancy=[]; tempFactor=[]; atomType=[]
    ct=0

    datb={}
    datb['atoms']=[]
    datb['bonds']=[]
    for l in lines:    
        line=l.split()
        if("ATOM" in line[0] or "HETATM" in line[0]):
            serial.append(int(l[6:11]))
            atmName.append(l[12:16].strip())
            val_rName=l[17:20].strip()
            resName.append(val_rName)
            chain_val=l[21:22].strip()
            chain.append(chain_val)
            if (not chain_val in varNchains):
                varNchains.append(chain_val)
            val_rId=int(l[22:26])
            resId.append(val_rId)
            x = float(l[30:38])
            y = float(l[38:46])
            z = float(l[46:54])
            positions.append([x,y,z])
            occupancy.append(l[54:60].strip())
            tempFactor.append(l[60:66].strip())
            atomType.append(l[77:79].strip())
            ct+=1

    ## Create list of atoms
    tmpRes=resId[0]
    resct=1
    for i in range(len(chain)): 
        if(tmpRes != resId[i]):
            tmpRes=resId[i]
            resct += 1
        datb['atoms'].append({
            "name": atmName[i],
            "chain": chain[i],
            "positions": positions[i],
            "residue_index": resct,
            "element": atomType[i],
            "residue_name": resName[i]+str(resId[i]),
            "serial": i,
        })

    ## Create list of bonds using the parmed module
    for i in range(len(top.bonds)):
            bondpair=top.bonds[i].__dict__
            atom1=re.findall('\[(\d+)\]', str(bondpair['atom1']))
            atom2=re.findall('\[(\d+)\]', str(bondpair['atom2']))
            datb['bonds'].append({
                    'atom2_index':int(atom1[0]),
                    'atom1_index':int(atom2[0])
            })

    return(json.dumps(datb))
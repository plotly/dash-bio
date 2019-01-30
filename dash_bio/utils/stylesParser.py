import json
import ast


def create_style(pdb_path, style, mol_color, custom_dict, atm_color=None):
    """Function to create the different styles (stick, cartoon, sphere)
    using the protein data bank (PDB) file as input. This function outputs
    the styles as a JSON file

    @param pdb_path
    Name of the biomolecular structure file in PDB format

    @param style
    Type of representation of the biomolecule (options: stick, cartoon, sphere)

    @param mol_color
    Coloring scheme for depicting biomolecules

    @param custom_dict
    optional parameter to specify the color scheme for different chains
    in JSON format

    @param atm_color
    optional parameter to specify the color scheme for different atoms
    in JSON format
    """

    # Read input file
    with open(pdb_path, 'r') as infile:
        # store only non-empty lines
        lines = [l.strip() for l in infile if l.strip()]

    # Define dictionary of atom and chain colors

    chains_dict = {
        "A": "#32cd32",
        "B": "#8a2be2",
        "C": "#ff4500",
        "D": "#00bfff",
        "E": "#ff00ff",
        "F": "#ffff00",
        "G": "#4682b4",
        "H": "#ffb6c1",
        "I": "#a52aaa",
        "J": "#ee82ee",
        "K": "#75FF33",
        "L": "#FFBD33",
        "M": "#400040",
        "N": "#004000",
        "O": "#008080",
        "P": "#008080",
        "x": "#9c6677",
        "Y": "#b7c5c8"
    }
    # if (custom_dict is None or custom_dict is ''):
    #     chainsDict=chains_dict
    # else:
    #     d=ast.literal_eval(custom_dict)
    #     for k,v in d.items():
    #         chains_dict[k]=v

    # Color each amino acid residue (protein)
    # or nucleotide (DNA/RNA) based on its identity
    residue_id = {
        'ALA': '#C8C8C8',
        'ARG': '#145AFF',
        'ASN': '#00DCDC',
        'ASP': '#E60A0A',
        'CYS': '#E6E600',
        'GLN': '#00DCDC',
        'GLU': '#E60A0A',
        'GLY': '#EBEBEB',
        'HIS': '#8282D2',
        'ILE': '#0F820F',
        'LEU': '#0F820F',
        'LYS': '#145AFF',
        'MET': '#E6E600',
        'PHE': '#3232AA',
        'PRO': '#DC9682',
        'SER': '#FA9600',
        'THR': '#FA9600',
        'TRP': '#B45AB4',
        'TYR': '#3232AA',
        'VAL': '#0F820F',
        'ASX': '#FF69B4',
        'GLX': '#FF69B4',
        'A': '#A0A0FF',
        'DA': '#A0A0FF',
        'G': '#FF7070',
        'DG': '#FF7070',
        'I': '#80FFFF',
        'C': '#FF8C4B',
        'DC': '#FF8C4B',
        'T': '#A0FFA0',
        'DT': '#A0FFA0',
        'U': '#FF8080'
    }

    # Color amino acids based on amino acid type
    residue_property = {}
    # Hydrophobic amino acids
    for i in ['GLY', 'ALA', 'LEU', 'ILE', 'VAL', 'MET', 'PRO']:
        residue_property[i] = '#00ff80'
    # Polar amino acids
    for i in ['ASN', 'GLN', 'SER', 'THR', 'CYS']:
        residue_property[i] = '#ff00bf'
    # Acidic (negatively charged at pH 7) amino acids
    for i in ['ASP', 'GLU']:
        residue_property[i] = '#ff4000'
    # Basic (positively charged at pH 7) amino acids
    for i in ['LYS', 'ARG', 'HIS']:
        residue_property[i] = '#0040ff'
    # aromatic amino acids
    for i in ['TRP', 'TYR', 'PHE']:
        residue_property[i] = '#ffff00'
    # Purine nucleotides
    for i in ['A', 'G', 'DA', 'DG']:
        residue_property[i] = '#A00042'
    # Pyrimidine nucleotides
    for i in ['DT', 'DC', 'U', 'I', 'C']:
        residue_property[i] = '#4F4600'

    if atm_color is None:
        atm_color = {
            "C": "#c8c8c8",
            "H": "#ffffff",
            "N": "#8f8fff",
            "S": "#ffc832",
            "O": "#f00000",
            "F": "#ffff00",
            "P": "#ffa500",
            "K": "#42f4ee",
            "G": "#3f3f3f"
        }

    # Update molecule colors based on user input dictionary
    # Example user inputs:
    # To change chain color: {'A':'#abcdef', 'B':'#bcdefa'}
    # To chain residue color: {'ALA':'#abcdef', 'GLY':'#bcdefa'}
    if custom_dict is None or custom_dict == '':
        chains_dict = chains_dict
        residue_id = residue_id
        residue_property = residue_property
        atm_color = atm_color
    else:
        chains_dict = custom_dict
        d = ast.literal_eval(custom_dict)
        if mol_color == 'atomColor':
            for k, v in d.items():
                atm_color[k] = v
        elif mol_color == 'chainColor':
            for k, v in d.items():
                chains_dict[k] = v
        elif mol_color == 'residueID':
            for k, v in d.items():
                residue_id[k] = v
        elif mol_color == 'residue_property':
            for k, v in d.items():
                residue_property[k] = v

    # Create the styles files in JSON format

    # Initialize variables
    chain = []
    atm_type = []
    res_name = []
    ct1 = 0
    data = {}

    # Variables that store the character positions of different
    # parameters from the molecule PDB file
    chainpos = [21, 22]
    atm_typepos = [77, 78]
    r_name_pos = [17, 20]

    for l in lines:
        line = l.split()
        if "ATOM" in line[0] or "HETATM" in line[0]:
            chain.append(l[chainpos[0]:chainpos[1]].strip())
            atm_type.append(l[atm_typepos[0]:atm_typepos[1]])
            val_r_name = l[r_name_pos[0]:r_name_pos[1]].strip()
            res_name.append(val_r_name)

            index = str(ct1)
            if line[0] == "ATOM":
                if mol_color == 'chainColor':
                    if chain[ct1] in chains_dict:
                        data[index] = {
                            "color": chains_dict[chain[ct1]],
                            "visualization_type": style
                        }
                    else:
                        data[index] = {
                            "color": '#BEA06E',
                            "visualization_type": style
                        }
                elif mol_color == 'residueID':
                    uresn = res_name[ct1].upper()
                    if uresn in residue_id:
                        data[index] = {
                            "color": residue_id[res_name[ct1]],
                            "visualization_type": style
                        }
                    else:
                        data[index] = {
                            "color": '#BEA06E',
                            "visualization_type": style
                        }
                elif mol_color == 'residueProperty':
                    uresn = res_name[ct1].upper()
                    if uresn in residue_property:
                        data[index] = {
                            "color": residue_property[res_name[ct1]],
                            "visualization_type": style
                        }
                    else:
                        data[index] = {
                            "color": '#BEA06E',
                            "visualization_type": style
                        }
                elif mol_color == 'atomColor':
                    if atm_type[ct1] in atm_color:
                        data[index] = {
                            "color": atm_color[atm_type[ct1]],
                            "visualization_type": style
                        }
                    else:
                        data[index] = {
                            "color": "#330000",
                            "visualization_type": style
                        }

            else:
                if atm_type[ct1] in atm_color:
                    data[index] = {
                        "color": atm_color[atm_type[ct1]],
                        "visualization_type": "stick"
                    }
                else:
                    data[index] = {
                        "color": "#330000",
                        "visualization_type": "stick"
                    }
            ct1 += 1

    return json.dumps(data)

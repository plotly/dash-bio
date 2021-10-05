ATOM_COLOR_DICT = {
    "C": "#c8c8c8",
    "H": "#ffffff",
    "N": "#8f8fff",
    "S": "#ffc832",
    "O": "#f00000",
    "F": "#ffff00",
    "P": "#ffa500",
    "K": "#42f4ee",
    "G": "#3f3f3f",
}

CHAIN_COLOR_DICT = {
    "A": "#320000",
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
    "Y": "#b7c5c8",
}

RESIDUE_COLOR_DICT = {
    "ALA": "#C8C8C8",
    "ARG": "#145AFF",
    "ASN": "#00DCDC",
    "ASP": "#E60A0A",
    "CYS": "#E6E600",
    "GLN": "#00DCDC",
    "GLU": "#E60A0A",
    "GLY": "#EBEBEB",
    "HIS": "#8282D2",
    "ILE": "#0F820F",
    "LEU": "#0F820F",
    "LYS": "#145AFF",
    "MET": "#E6E600",
    "PHE": "#3232AA",
    "PRO": "#DC9682",
    "SER": "#FA9600",
    "THR": "#FA9600",
    "TRP": "#B45AB4",
    "TYR": "#3232AA",
    "VAL": "#0F820F",
    "ASX": "#FF69B4",
    "GLX": "#FF69B4",
    "A": "#A0A0FF",
    "DA": "#A0A0FF",
    "G": "#FF7070",
    "DG": "#FF7070",
    "I": "#80FFFF",
    "C": "#FF8C4B",
    "DC": "#FF8C4B",
    "T": "#A0FFA0",
    "DT": "#A0FFA0",
    "U": "#FF8080",
}

AMINO_ACID_CLASSES = {  # pylint: disable=invalid-name
    "hydrophobic": ["GLY", "ALA", "LEU", "ILE", "VAL", "MET", "PRO"],
    "polar": ["ASN", "GLN", "SER", "THR", "CYS"],
    "acidic": ["ASP", "GLU"],
    "basic": ["LYS", "ARG", "HIS"],
    "aromatic": ["TRP", "TYR", "PHE"],
    "purine": ["A", "G", "DA", "DG"],
    "pyrimidine": ["DT", "DC", "U", "I", "C"],
}

RESIDUE_TYPES = {}
for aa_type in AMINO_ACID_CLASSES:
    for aa in AMINO_ACID_CLASSES[aa_type]:
        RESIDUE_TYPES[aa] = aa_type

RESIDUE_TYPE_COLOR_DICT = {
    "hydrophobic": "#00ff80",
    "polar": "#ff00bf",
    "acidic": "#ff4000",
    "basic": "#0040ff",
    "aromatic": "#ffff00",
    "purine": "#A00042",
    "pyrimidine": "#4F4600",
}

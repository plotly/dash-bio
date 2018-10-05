module.exports = function(data) {
    var lines = data.split('\n');
    var natoms = parseInt(lines[0]);
    var nframes = Math.floor(lines.length/(natoms+2));
    var trajectory = []
    for(var i = 0; i < nframes; i++) {
        var atoms = [];
        for(var j = 0; j < natoms; j++) {
            var line = lines[i*(natoms+2)+j+2].split(/\s+/);
            var atom = {};
            var k = 0;
            while (line[k] == "") k++;
            atom.symbol = line[k++];
            atom.position = [parseFloat(line[k++]), parseFloat(line[k++]), parseFloat(line[k++])];
            atoms.push(atom);
        }
        trajectory.push(atoms);
    }
    return trajectory;
}

module.exports = {
    default: {
        atomScale: 0.6,
        relativeAtomScale: 1.0,
        bondScale: 0.5,
        ao: 0.75,
        aoRes: 256,
        brightness: 0.5,
        outline: 0.0,
        spf: 32,
        bonds: false,
        bondThreshold: 1.2,
        bondShade: 0.5,
        atomShade: 0.5,
        dofStrength: 0.0,
        dofPosition: 0.5,
        fxaa: 1
    },
    stickball:  {
        atomScale: 0.24,
        relativeAtomScale: 0.64,
        bondScale: 0.5,
        bonds: true,
        bondThreshold: 1.2,
    },
    toon:  {
        ao: 0,
        spf: 0,
        brightness: 0.5,
        outline: 1,
    },
    licorice:  {
        atomScale: 0.1,
        relativeAtomScale: 0,
        bondScale: 1,
        bonds: true,
        bondThreshold: 1.2,
    },
};
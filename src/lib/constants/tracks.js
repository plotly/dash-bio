export const CHORDS = 'CHORDS';
export const HEATMAP = 'HEATMAP';
export const HIGHLIGHT = 'HIGHLIGHT';
export const HISTOGRAM = 'HISTOGRAM';
export const LINE = 'LINE';
export const SCATTER = 'SCATTER';
export const STACK = 'STACK';
export const TEXT = 'TEXT';

export const TRACK_TYPES = [
    CHORDS,
    HEATMAP,
    HIGHLIGHT,
    HISTOGRAM,
    LINE,
    SCATTER,
    STACK,
    TEXT,
];

/**
Visualization types supported by pileup.js
Options defined in https://github.com/akmorrow13/pileup.js/blob/master/src/main/pileup.js
*/
export const PILEUP_VIZ_TYPES = [
    'coverage',
    'genome',
    'genes',
    'features',
    'idiogram',
    'location',
    'scale',
    'variants',
    'genotypes',
    'pileup',
];

/**
Data source types supported by pileup.js
Options defined in https://github.com/akmorrow13/pileup.js/blob/master/src/main/pileup.js
*/
export const PILEUP_SOURCE_TYPES = [
    'bam',
    'alignmentJson',
    'variantJson',
    'featureJson',
    'idiogramJson',
    'cytoBand',
    'vcf',
    'twoBit',
    'bigBed',
    'GAReadAlignment',
    'GAVariant',
    'GAFeature',
    'GAGene',
];

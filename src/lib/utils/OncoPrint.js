import _ from 'lodash';

import PrecomputedComparator from './PrecomputedComparator';


const MutationEventTypes = ['INFRAME', 'TRUNC', 'MISSENSE'];

export const SupportedEvents = {
    // Mutations
    MISSENSE: {
        colorHTML: '#008000',
        displayName: 'Missense mutation'
    },
    INFRAME: {
        colorHTML: '#993404',
        displayName: 'Inframe mutation'
    },
    TRUNC: {
        colorHTML: '#000000',
        displayName: 'Truncation mutation'
    },
    // Fusion
    FUSION: {
        colorHTML: '#8b00c9',
        displayName: 'Fusion'
    },
    // Copy number alterations
    AMP: {
        colorHTML: '#ff0000',
        displayName: 'Amplification'
    },
    GAIN: {
        colorHTML: '#ffb6c1',
        displayName: 'Gain'
    },
    HETLOSS: {
        colorHTML: '#8fd8d8',
        displayName: 'Shallow deletion'
    },
    HOMDEL: {
        colorHTML: '#0000ff',
        displayName: 'Deep deletion'
    },
    // mRNA expressions
    UP: {
        colorHTML: '#ff9999',
        displayName: 'mRNA Upregulation'
    },
    DOWN: {
        colorHTML: '#6699cc',
        displayName: 'mRNA Downregulation'
    }
};

// Describes the order of importance for CNA events.
const AlterationsOrder = {
    AMP: 0,
    GAIN: 2,
    HETLOSS: 3,
    HOMDEL: 1,
    undefined: 4
};

// Describes the order of importance for mutation events.
const MutationsOrder = {
    INFRAME: 1,
    MISSENSE: 3,
    TRUNC: 0,
    undefined: 4
};

// Describes the order of importance for mRNA expression events.
const ExpressionsOrder = {
    UP: 0,
    DOWN: 1,
    undefined: 2
};


// Retrieves the gene names in a set of events.
export const getGeneNames = (events) =>
    events.map((e) => e.gene).filter((gene) => gene !== null);


// Returns the set of genes (unique) reversed to display on the Y axis.
export const getSortedGenes = (events) =>
    [...new Set(getGeneNames(events))].reverse();


// Returns a hash map with the percentage of events (value) per gene (key).
export const getEventRatiosPerGene = (events, nbSamples) => {
    const map = events.reduce((acc, event) => {
        if (event.type) {
            if (acc[event.gene]) {
                acc[event.gene] += 1;
            } else {
                acc[event.gene] = 1;
            }
        }

        return acc;
    }, {});

    Object.keys(map).forEach((gene) => {
        map[gene] = Math.floor(map[gene] / nbSamples * 100);
    });

    return map;
};


// Returns true if an event is a mutation, false otherwise.
export const isMutation = (event) =>
    MutationEventTypes.includes(event.type);


// Returns a comparator result value given an integer that may not be -1, 0 or
// 1 (which are the only allowed sorting return values).
const sign = (x) => {
    if (x > 0) {
        return 1;
    } else if (x < 0) {
        return -1;
    }

    return 0;
};


// Returns a comparator for the samples (matrix column), combining all the
// precomputed comparators created for each gene (i.e. matrix row).
const samplesComparator = (genes, samplesToIndex, perGeneComparators) => (s1, s2) => {
    let result = 0;
    let absoluteResult = 0;

    for (let i = 0; i < genes.length; i += 1) {
        const nextResult = perGeneComparators[i].compare(s1, s2);
        const nextAbsoluteResult = Math.abs(nextResult);

        if (nextAbsoluteResult > absoluteResult) {
            result = nextResult;
            absoluteResult = nextAbsoluteResult;
        }

        if (absoluteResult === 1) {
            break;
        }
    }

    if (result === 0) {
        result = samplesToIndex[s1] < samplesToIndex[s2] ? -1 : 1;
    }

    return result > 0 ? 1 : -1;
};


// Returns a comparator to sort the samples given a gene .
const sortEventsForGene = (s1, s2, gene, samplesMap) => {
    const d1 = samplesMap[s1][gene] || {};
    const d2 = samplesMap[s2][gene] || {};

    if (d1.FUSION && !d2.FUSION) {
        return -1;
    } else if (!d1.FUSION && d2.FUSION) {
        return 1;
    }

    const cna = sign(AlterationsOrder[d1.CNA] - AlterationsOrder[d2.CNA]);
    if (cna !== 0) {
        return cna;
    }

    const mut = sign(MutationsOrder[d1.MUT] - MutationsOrder[d2.MUT]);
    if (mut !== 0) {
        return mut;
    }

    const exp = sign(ExpressionsOrder[d1.EXP] - ExpressionsOrder[d2.EXP]);
    if (exp !== 0) {
        return exp;
    }

    return 0;
};


// Returns a map to gather information on each sample, per gene, per event.
export const createSamplesMap = (events) => {
    const samplesMap = {};

    events.forEach((e) => {

        const s = samplesMap[e.sample] || {};
        const v = s[e.gene] || {};

        if (isMutation(e)) {
            v.MUT = e.type;
        } else {
            v[e.type] = e.alteration;
        }

        samplesMap[e.sample] = Object.assign(
            {},
            samplesMap[e.sample],
            { [e.gene]: v }
        );
    });

    return samplesMap;
};


// Helper function to create a comparator for each gene.
export const createSortEventsForGeneComparator = (gene, map) => (s1, s2) =>
    sortEventsForGene(s1, s2, gene, map);


// Returns the list of samples sorted with mutual exclusion. The sorting
// algorithm is similar to the one used on cBioPortal and takes both the rows
// (genes) and columns (samples) into account. We returns the sorted set of
// samples to display on X axix.
export const getSortedSamples = (events) => {
    // Get a map with samples sorted by gene and events.
    const samplesMap = createSamplesMap(events);
    // Get a unique list of genes, sorted by the natural order in the events.
    const genes = [...new Set(getGeneNames(events))];
    // Sort the samples alphabetically.
    const samples = [...new Set(events.map((e) => e.sample))].sort();

    // Build one comparator per gene.
    const perGeneComparators = [];
    genes.forEach((gene) => {
        perGeneComparators.push(
            // This actually sorts the samples, but for each gene only.
            new PrecomputedComparator(
                [...samples],
                createSortEventsForGeneComparator(gene, samplesMap)
            )
        );
    });

    // Create a map with the current order of the samples.
    const samplesToIndex = {};
    samples.forEach((s, i) => {
        samplesToIndex[s] = i;
    });

    // Finally, sort the samples taking into account both the columns and rows.
    const sortedSamples = [...samples];
    sortedSamples.sort(
        samplesComparator(genes, samplesToIndex, perGeneComparators)
    );

    return sortedSamples;
};


// Returns the events aggregated by type (if mutation) or alteration.
export const aggregate = (events) => {
    const out = {};

    events.forEach((e) => {
        if (!e.type || e.type === 'NONE') {
            return;
        }

        const k = isMutation(e) ? e.type : e.alteration;
        const v = out[k] || {
            type: e.type,
            alteration: e.alteration,
            events: []
        };

        v.events.push(e);
        out[k] = v;
    });

    return out;
};


// Returns the display name of an event.
export const getDisplayName = (event) => {
    const eventName = isMutation(event) ? event.type : event.alteration;

    return SupportedEvents[eventName].displayName;
};


// Returns the color of an event.
export const getColor = (event, colorscale) => {
    const eventName = isMutation(event) ? event.type : event.alteration;

    let color;
    if (colorscale && _.isObject(colorscale)) {
        color = colorscale[eventName];
        // Revert back to default scale if not found
        if (!color) {
            color = SupportedEvents[eventName].colorHTML;
        }
    } else {
        color = SupportedEvents[eventName].colorHTML;
    }

    return color;
};

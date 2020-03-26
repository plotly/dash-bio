/* eslint-disable no-inline-comments */
export default {
    alignmentChart: () =>
        import(
            /* webpackChunkName: "alignment" */ './fragments/AlignmentChart.react'
        ),
    circos: () =>
        import(/* webpackChunkName: "circos" */ './fragments/Circos.react'),
    ideogram: () =>
        import(/* webpackChunkName: "ideogram" */ './fragments/Ideogram.react'),
    molecule2dViewer: () =>
        import(
            /* webpackChunkName: "moleculeviewer2" */ './fragments/Molecule2dViewer.react'
        ),
    molecule3dViewer: () =>
        import(
            /* webpackChunkName: "moleculeviewer3" */ './fragments/Molecule3dViewer'
        ),
    needlePlot: () =>
        import(/* webpackChunkName: "needle" */ './fragments/NeedlePlot.react'),
    oncoPrint: () =>
        import(/* webpackChunkName: "onco" */ './fragments/OncoPrint.react'),
    sequenceViewer: () =>
        import(
            /* webpackChunkName: "sequence" */ './fragments/SequenceViewer.react'
        ),
    speck: () =>
        import(/* webpackChunkName: "speck" */ './fragments/Speck.react'),
};

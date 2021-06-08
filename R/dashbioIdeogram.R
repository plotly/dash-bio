# AUTO GENERATED FILE - DO NOT EDIT

dashbioIdeogram <- function(id=NULL, ancestors=NULL, annotationHeight=NULL, annotationTracks=NULL, annotations=NULL, annotationsColor=NULL, annotationsData=NULL, annotationsLayout=NULL, annotationsPath=NULL, assembly=NULL, barWidth=NULL, brush=NULL, brushData=NULL, chrHeight=NULL, chrMargin=NULL, chrWidth=NULL, chromosomes=NULL, className=NULL, container=NULL, dataDir=NULL, filterable=NULL, fullChromosomeLabels=NULL, histogramScaling=NULL, homology=NULL, localOrganism=NULL, organism=NULL, orientation=NULL, perspective=NULL, ploidy=NULL, ploidyDesc=NULL, rangeSet=NULL, resolution=NULL, rotatable=NULL, rotated=NULL, sex=NULL, showAnnotTooltip=NULL, showBandLabels=NULL, showChromosomeLabels=NULL, showFullyBanded=NULL, showNonNuclearChromosomes=NULL, style=NULL) {
    
    props <- list(id=id, ancestors=ancestors, annotationHeight=annotationHeight, annotationTracks=annotationTracks, annotations=annotations, annotationsColor=annotationsColor, annotationsData=annotationsData, annotationsLayout=annotationsLayout, annotationsPath=annotationsPath, assembly=assembly, barWidth=barWidth, brush=brush, brushData=brushData, chrHeight=chrHeight, chrMargin=chrMargin, chrWidth=chrWidth, chromosomes=chromosomes, className=className, container=container, dataDir=dataDir, filterable=filterable, fullChromosomeLabels=fullChromosomeLabels, histogramScaling=histogramScaling, homology=homology, localOrganism=localOrganism, organism=organism, orientation=orientation, perspective=perspective, ploidy=ploidy, ploidyDesc=ploidyDesc, rangeSet=rangeSet, resolution=resolution, rotatable=rotatable, rotated=rotated, sex=sex, showAnnotTooltip=showAnnotTooltip, showBandLabels=showBandLabels, showChromosomeLabels=showChromosomeLabels, showFullyBanded=showFullyBanded, showNonNuclearChromosomes=showNonNuclearChromosomes, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Ideogram',
        namespace = 'dash_bio',
        propNames = c('id', 'ancestors', 'annotationHeight', 'annotationTracks', 'annotations', 'annotationsColor', 'annotationsData', 'annotationsLayout', 'annotationsPath', 'assembly', 'barWidth', 'brush', 'brushData', 'chrHeight', 'chrMargin', 'chrWidth', 'chromosomes', 'className', 'container', 'dataDir', 'filterable', 'fullChromosomeLabels', 'histogramScaling', 'homology', 'localOrganism', 'organism', 'orientation', 'perspective', 'ploidy', 'ploidyDesc', 'rangeSet', 'resolution', 'rotatable', 'rotated', 'sex', 'showAnnotTooltip', 'showBandLabels', 'showChromosomeLabels', 'showFullyBanded', 'showNonNuclearChromosomes', 'style'),
        package = 'dashBio'
        )

    structure(component, class = c('dash_component', 'list'))
}

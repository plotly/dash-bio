# AUTO GENERATED FILE - DO NOT EDIT

dashbioIdeogram <- function(id=NULL, style=NULL, className=NULL, annotationsLayout=NULL, annotations=NULL, annotationsPath=NULL, annotationsData=NULL, annotationTracks=NULL, annotationHeight=NULL, annotationsColor=NULL, histogramScaling=NULL, barWidth=NULL, showAnnotTooltip=NULL, assembly=NULL, brush=NULL, brushData=NULL, container=NULL, chrHeight=NULL, chrMargin=NULL, chrWidth=NULL, chromosomes=NULL, dataDir=NULL, organism=NULL, localOrganism=NULL, homology=NULL, perspective=NULL, fullChromosomeLabels=NULL, resolution=NULL, filterable=NULL, orientation=NULL, ploidy=NULL, ploidyDesc=NULL, ancestors=NULL, rangeSet=NULL, rotatable=NULL, rotated=NULL, sex=NULL, showChromosomeLabels=NULL, showBandLabels=NULL, showFullyBanded=NULL, showNonNuclearChromosomes=NULL) {
    
    props <- list(id=id, style=style, className=className, annotationsLayout=annotationsLayout, annotations=annotations, annotationsPath=annotationsPath, annotationsData=annotationsData, annotationTracks=annotationTracks, annotationHeight=annotationHeight, annotationsColor=annotationsColor, histogramScaling=histogramScaling, barWidth=barWidth, showAnnotTooltip=showAnnotTooltip, assembly=assembly, brush=brush, brushData=brushData, container=container, chrHeight=chrHeight, chrMargin=chrMargin, chrWidth=chrWidth, chromosomes=chromosomes, dataDir=dataDir, organism=organism, localOrganism=localOrganism, homology=homology, perspective=perspective, fullChromosomeLabels=fullChromosomeLabels, resolution=resolution, filterable=filterable, orientation=orientation, ploidy=ploidy, ploidyDesc=ploidyDesc, ancestors=ancestors, rangeSet=rangeSet, rotatable=rotatable, rotated=rotated, sex=sex, showChromosomeLabels=showChromosomeLabels, showBandLabels=showBandLabels, showFullyBanded=showFullyBanded, showNonNuclearChromosomes=showNonNuclearChromosomes)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Ideogram',
        namespace = 'dash_bio',
        propNames = c('id', 'style', 'className', 'annotationsLayout', 'annotations', 'annotationsPath', 'annotationsData', 'annotationTracks', 'annotationHeight', 'annotationsColor', 'histogramScaling', 'barWidth', 'showAnnotTooltip', 'assembly', 'brush', 'brushData', 'container', 'chrHeight', 'chrMargin', 'chrWidth', 'chromosomes', 'dataDir', 'organism', 'localOrganism', 'homology', 'perspective', 'fullChromosomeLabels', 'resolution', 'filterable', 'orientation', 'ploidy', 'ploidyDesc', 'ancestors', 'rangeSet', 'rotatable', 'rotated', 'sex', 'showChromosomeLabels', 'showBandLabels', 'showFullyBanded', 'showNonNuclearChromosomes'),
        package = 'dashBio'
        )

    structure(component, class = c('dash_component', 'list'))
}

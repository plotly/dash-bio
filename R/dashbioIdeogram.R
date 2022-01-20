# AUTO GENERATED FILE - DO NOT EDIT

dashbioIdeogram <- function(id=NULL, accessToken=NULL, ancestors=NULL, annotationHeight=NULL, annotationTracks=NULL, annotations=NULL, annotationsColor=NULL, annotationsData=NULL, annotationsLayout=NULL, annotationsPath=NULL, assembly=NULL, barWidth=NULL, brush=NULL, brushData=NULL, chrHeight=NULL, chrMargin=NULL, chrWidth=NULL, chromosomeScale=NULL, chromosomes=NULL, className=NULL, container=NULL, dataDir=NULL, demarcateCollinearChromosomes=NULL, filterable=NULL, fullChromosomeLabels=NULL, geometry=NULL, heatmaps=NULL, histogramScaling=NULL, homology=NULL, legend=NULL, loading_state=NULL, organism=NULL, orientation=NULL, perspective=NULL, ploidy=NULL, ploidyDesc=NULL, rangeSet=NULL, resolution=NULL, rotatable=NULL, rotated=NULL, rows=NULL, sex=NULL, showAnnotTooltip=NULL, showBandLabels=NULL, showChromosomeLabels=NULL, showFullyBanded=NULL, showNonNuclearChromosomes=NULL, style=NULL) {
    
    props <- list(id=id, accessToken=accessToken, ancestors=ancestors, annotationHeight=annotationHeight, annotationTracks=annotationTracks, annotations=annotations, annotationsColor=annotationsColor, annotationsData=annotationsData, annotationsLayout=annotationsLayout, annotationsPath=annotationsPath, assembly=assembly, barWidth=barWidth, brush=brush, brushData=brushData, chrHeight=chrHeight, chrMargin=chrMargin, chrWidth=chrWidth, chromosomeScale=chromosomeScale, chromosomes=chromosomes, className=className, container=container, dataDir=dataDir, demarcateCollinearChromosomes=demarcateCollinearChromosomes, filterable=filterable, fullChromosomeLabels=fullChromosomeLabels, geometry=geometry, heatmaps=heatmaps, histogramScaling=histogramScaling, homology=homology, legend=legend, loading_state=loading_state, organism=organism, orientation=orientation, perspective=perspective, ploidy=ploidy, ploidyDesc=ploidyDesc, rangeSet=rangeSet, resolution=resolution, rotatable=rotatable, rotated=rotated, rows=rows, sex=sex, showAnnotTooltip=showAnnotTooltip, showBandLabels=showBandLabels, showChromosomeLabels=showChromosomeLabels, showFullyBanded=showFullyBanded, showNonNuclearChromosomes=showNonNuclearChromosomes, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Ideogram',
        namespace = 'dash_bio',
        propNames = c('id', 'accessToken', 'ancestors', 'annotationHeight', 'annotationTracks', 'annotations', 'annotationsColor', 'annotationsData', 'annotationsLayout', 'annotationsPath', 'assembly', 'barWidth', 'brush', 'brushData', 'chrHeight', 'chrMargin', 'chrWidth', 'chromosomeScale', 'chromosomes', 'className', 'container', 'dataDir', 'demarcateCollinearChromosomes', 'filterable', 'fullChromosomeLabels', 'geometry', 'heatmaps', 'histogramScaling', 'homology', 'legend', 'loading_state', 'organism', 'orientation', 'perspective', 'ploidy', 'ploidyDesc', 'rangeSet', 'resolution', 'rotatable', 'rotated', 'rows', 'sex', 'showAnnotTooltip', 'showBandLabels', 'showChromosomeLabels', 'showFullyBanded', 'showNonNuclearChromosomes', 'style'),
        package = 'dashBio'
        )

    structure(component, class = c('dash_component', 'list'))
}

# AUTO GENERATED FILE - DO NOT EDIT

dashbioCircos <- function(id=NULL, config=NULL, enableDownloadSVG=NULL, enableZoomPan=NULL, eventDatum=NULL, layout=NULL, selectEvent=NULL, size=NULL, style=NULL, tracks=NULL) {
    
    props <- list(id=id, config=config, enableDownloadSVG=enableDownloadSVG, enableZoomPan=enableZoomPan, eventDatum=eventDatum, layout=layout, selectEvent=selectEvent, size=size, style=style, tracks=tracks)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Circos',
        namespace = 'dash_bio',
        propNames = c('id', 'config', 'enableDownloadSVG', 'enableZoomPan', 'eventDatum', 'layout', 'selectEvent', 'size', 'style', 'tracks'),
        package = 'dashBio'
        )

    structure(component, class = c('dash_component', 'list'))
}

# AUTO GENERATED FILE - DO NOT EDIT

dashbioCircos <- function(enableDownloadSVG=NULL, enableZoomPan=NULL, id=NULL, style=NULL, eventDatum=NULL, selectEvent=NULL, layout=NULL, config=NULL, size=NULL, tracks=NULL) {
    
    component <- list(
        props = list(enableDownloadSVG=enableDownloadSVG, enableZoomPan=enableZoomPan, id=id, style=style, eventDatum=eventDatum, selectEvent=selectEvent, layout=layout, config=config, size=size, tracks=tracks),
        type = 'Circos',
        namespace = 'dash_bio',
        propNames = c('enableDownloadSVG', 'enableZoomPan', 'id', 'style', 'eventDatum', 'selectEvent', 'layout', 'config', 'size', 'tracks'),
        package = 'dashBio'
        )

    component$props <- filter_null(component$props)

    structure(component, class = c('dash_component', 'list'))
}
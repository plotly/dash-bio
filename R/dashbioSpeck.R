# AUTO GENERATED FILE - DO NOT EDIT

#' @export
dashbioSpeck <- function(id=NULL, data=NULL, loading_state=NULL, presetView=NULL, scrollZoom=NULL, showLegend=NULL, style=NULL, view=NULL) {
    
    props <- list(id=id, data=data, loading_state=loading_state, presetView=presetView, scrollZoom=scrollZoom, showLegend=showLegend, style=style, view=view)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Speck',
        namespace = 'dash_bio',
        propNames = c('id', 'data', 'loading_state', 'presetView', 'scrollZoom', 'showLegend', 'style', 'view'),
        package = 'dashBio'
        )

    structure(component, class = c('dash_component', 'list'))
}

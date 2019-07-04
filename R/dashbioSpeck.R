# AUTO GENERATED FILE - DO NOT EDIT

dashbioSpeck <- function(id=NULL, data=NULL, scrollZoom=NULL, view=NULL, presetView=NULL) {
    
    props <- list(id=id, data=data, scrollZoom=scrollZoom, view=view, presetView=presetView)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Speck',
        namespace = 'dash_bio',
        propNames = c('id', 'data', 'scrollZoom', 'view', 'presetView'),
        package = 'dashBio'
        )

    structure(component, class = c('dash_component', 'list'))
}

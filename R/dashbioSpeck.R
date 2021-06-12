# AUTO GENERATED FILE - DO NOT EDIT

dashbioSpeck <- function(id=NULL, data=NULL, presetView=NULL, scrollZoom=NULL, view=NULL) {
    
    props <- list(id=id, data=data, presetView=presetView, scrollZoom=scrollZoom, view=view)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Speck',
        namespace = 'dash_bio',
        propNames = c('id', 'data', 'presetView', 'scrollZoom', 'view'),
        package = 'dashBio'
        )

    structure(component, class = c('dash_component', 'list'))
}

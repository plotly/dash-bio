# AUTO GENERATED FILE - DO NOT EDIT

dashbioFornaContainer <- function(id=NULL, height=NULL, width=NULL, sequences=NULL, nodeFillColor=NULL, colorScheme=NULL, customColors=NULL, allowPanningAndZooming=NULL) {
    
    props <- list(id=id, height=height, width=width, sequences=sequences, nodeFillColor=nodeFillColor, colorScheme=colorScheme, customColors=customColors, allowPanningAndZooming=allowPanningAndZooming)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'FornaContainer',
        namespace = 'dash_bio',
        propNames = c('id', 'height', 'width', 'sequences', 'nodeFillColor', 'colorScheme', 'customColors', 'allowPanningAndZooming'),
        package = 'dashBio'
        )

    structure(component, class = c('dash_component', 'list'))
}

# AUTO GENERATED FILE - DO NOT EDIT

dashbioFornaContainer <- function(id=NULL, allowPanningAndZooming=NULL, colorScheme=NULL, customColors=NULL, height=NULL, hoverPattern=NULL, loading_state=NULL, nodeFillColor=NULL, sequences=NULL, width=NULL) {
    
    props <- list(id=id, allowPanningAndZooming=allowPanningAndZooming, colorScheme=colorScheme, customColors=customColors, height=height, hoverPattern=hoverPattern, loading_state=loading_state, nodeFillColor=nodeFillColor, sequences=sequences, width=width)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'FornaContainer',
        namespace = 'dash_bio',
        propNames = c('id', 'allowPanningAndZooming', 'colorScheme', 'customColors', 'height', 'hoverPattern', 'loading_state', 'nodeFillColor', 'sequences', 'width'),
        package = 'dashBio'
        )

    structure(component, class = c('dash_component', 'list'))
}

# AUTO GENERATED FILE - DO NOT EDIT

dashbioNeedlePlot <- function(id=NULL, clickData=NULL, domainStyle=NULL, height=NULL, loading_state=NULL, margin=NULL, mutationData=NULL, needleStyle=NULL, rangeSlider=NULL, width=NULL, xlabel=NULL, ylabel=NULL) {
    
    props <- list(id=id, clickData=clickData, domainStyle=domainStyle, height=height, loading_state=loading_state, margin=margin, mutationData=mutationData, needleStyle=needleStyle, rangeSlider=rangeSlider, width=width, xlabel=xlabel, ylabel=ylabel)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'NeedlePlot',
        namespace = 'dash_bio',
        propNames = c('id', 'clickData', 'domainStyle', 'height', 'loading_state', 'margin', 'mutationData', 'needleStyle', 'rangeSlider', 'width', 'xlabel', 'ylabel'),
        package = 'dashBio'
        )

    structure(component, class = c('dash_component', 'list'))
}

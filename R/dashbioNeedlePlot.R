# AUTO GENERATED FILE - DO NOT EDIT

dashbioNeedlePlot <- function(id=NULL, mutationData=NULL, xlabel=NULL, ylabel=NULL, rangeSlider=NULL, needleStyle=NULL, domainStyle=NULL) {
    
    props <- list(id=id, mutationData=mutationData, xlabel=xlabel, ylabel=ylabel, rangeSlider=rangeSlider, needleStyle=needleStyle, domainStyle=domainStyle)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'NeedlePlot',
        namespace = 'dash_bio',
        propNames = c('id', 'mutationData', 'xlabel', 'ylabel', 'rangeSlider', 'needleStyle', 'domainStyle'),
        package = 'dashBio'
        )

    structure(component, class = c('dash_component', 'list'))
}

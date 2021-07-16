# AUTO GENERATED FILE - DO NOT EDIT

dashbioNeedlePlot <- function(id=NULL, clickData=NULL, domainStyle=NULL, mutationData=NULL, needleStyle=NULL, rangeSlider=NULL, selectedData=NULL, xlabel=NULL, ylabel=NULL) {
    
    props <- list(id=id, clickData=clickData, domainStyle=domainStyle, mutationData=mutationData, needleStyle=needleStyle, rangeSlider=rangeSlider, selectedData=selectedData, xlabel=xlabel, ylabel=ylabel)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'NeedlePlot',
        namespace = 'dash_bio',
        propNames = c('id', 'clickData', 'domainStyle', 'mutationData', 'needleStyle', 'rangeSlider', 'selectedData', 'xlabel', 'ylabel'),
        package = 'dashBio'
        )

    structure(component, class = c('dash_component', 'list'))
}

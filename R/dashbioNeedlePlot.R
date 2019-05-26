# AUTO GENERATED FILE - DO NOT EDIT

dashbioNeedlePlot <- function(id=NULL, mutationData=NULL, xlabel=NULL, ylabel=NULL, rangeSlider=NULL, needleStyle=NULL, domainStyle=NULL) {
    
    component <- list(
        props = list(id=id, mutationData=mutationData, xlabel=xlabel, ylabel=ylabel, rangeSlider=rangeSlider, needleStyle=needleStyle, domainStyle=domainStyle),
        type = 'NeedlePlot',
        namespace = 'dash_bio',
        propNames = c('id', 'mutationData', 'xlabel', 'ylabel', 'rangeSlider', 'needleStyle', 'domainStyle'),
        package = 'dashBio'
        )

    component$props <- filter_null(component$props)

    structure(component, class = c('dash_component', 'list'))
}


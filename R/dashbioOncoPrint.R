# AUTO GENERATED FILE - DO NOT EDIT

dashbioOncoPrint <- function(id=NULL, backgroundcolor=NULL, colorscale=NULL, data=NULL, eventDatum=NULL, height=NULL, padding=NULL, range=NULL, showlegend=NULL, showoverview=NULL, width=NULL) {
    
    props <- list(id=id, backgroundcolor=backgroundcolor, colorscale=colorscale, data=data, eventDatum=eventDatum, height=height, padding=padding, range=range, showlegend=showlegend, showoverview=showoverview, width=width)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'OncoPrint',
        namespace = 'dash_bio',
        propNames = c('id', 'backgroundcolor', 'colorscale', 'data', 'eventDatum', 'height', 'padding', 'range', 'showlegend', 'showoverview', 'width'),
        package = 'dashBio'
        )

    structure(component, class = c('dash_component', 'list'))
}

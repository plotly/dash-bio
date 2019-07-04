# AUTO GENERATED FILE - DO NOT EDIT

dashbioOncoPrint <- function(id=NULL, eventDatum=NULL, data=NULL, padding=NULL, colorscale=NULL, backgroundcolor=NULL, range=NULL, showlegend=NULL, showoverview=NULL, width=NULL, height=NULL) {
    
    props <- list(id=id, eventDatum=eventDatum, data=data, padding=padding, colorscale=colorscale, backgroundcolor=backgroundcolor, range=range, showlegend=showlegend, showoverview=showoverview, width=width, height=height)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'OncoPrint',
        namespace = 'dash_bio',
        propNames = c('id', 'eventDatum', 'data', 'padding', 'colorscale', 'backgroundcolor', 'range', 'showlegend', 'showoverview', 'width', 'height'),
        package = 'dashBio'
        )

    structure(component, class = c('dash_component', 'list'))
}

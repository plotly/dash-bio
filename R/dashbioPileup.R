# AUTO GENERATED FILE - DO NOT EDIT

dashbioPileup <- function(id=NULL, style=NULL, className=NULL, range=NULL, reference=NULL, tracks=NULL) {
    
    props <- list(id=id, style=style, className=className, range=range, reference=reference, tracks=tracks)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Pileup',
        namespace = 'dash_bio',
        propNames = c('id', 'style', 'className', 'range', 'reference', 'tracks'),
        package = 'dashBio'
        )

    structure(component, class = c('dash_component', 'list'))
}

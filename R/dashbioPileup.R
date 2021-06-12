# AUTO GENERATED FILE - DO NOT EDIT

dashbioPileup <- function(id=NULL, className=NULL, range=NULL, reference=NULL, style=NULL, tracks=NULL) {
    
    props <- list(id=id, className=className, range=range, reference=reference, style=style, tracks=tracks)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Pileup',
        namespace = 'dash_bio',
        propNames = c('id', 'className', 'range', 'reference', 'style', 'tracks'),
        package = 'dashBio'
        )

    structure(component, class = c('dash_component', 'list'))
}

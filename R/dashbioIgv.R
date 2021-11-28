# AUTO GENERATED FILE - DO NOT EDIT

dashbioIgv <- function(id=NULL, className=NULL, genome=NULL, loading_state=NULL, locus=NULL, minimumBases=NULL, reference=NULL, style=NULL, tracks=NULL) {
    
    props <- list(id=id, className=className, genome=genome, loading_state=loading_state, locus=locus, minimumBases=minimumBases, reference=reference, style=style, tracks=tracks)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Igv',
        namespace = 'dash_bio',
        propNames = c('id', 'className', 'genome', 'loading_state', 'locus', 'minimumBases', 'reference', 'style', 'tracks'),
        package = 'dashBio'
        )

    structure(component, class = c('dash_component', 'list'))
}

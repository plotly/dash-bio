# AUTO GENERATED FILE - DO NOT EDIT

dashbioIgv <- function(id=NULL, style=NULL, className=NULL, genome=NULL, reference=NULL, locus=NULL, minimumBases=NULL, tracks=NULL) {
    
    props <- list(id=id, style=style, className=className, genome=genome, reference=reference, locus=locus, minimumBases=minimumBases, tracks=tracks)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Igv',
        namespace = 'dash_bio',
        propNames = c('id', 'style', 'className', 'genome', 'reference', 'locus', 'minimumBases', 'tracks'),
        package = 'dashBio'
        )

    structure(component, class = c('dash_component', 'list'))
}

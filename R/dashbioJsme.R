# AUTO GENERATED FILE - DO NOT EDIT

#' @export
dashbioJsme <- function(id=NULL, eventSmiles=NULL, height=NULL, loading_state=NULL, options=NULL, smiles=NULL, style=NULL, width=NULL) {
    
    props <- list(id=id, eventSmiles=eventSmiles, height=height, loading_state=loading_state, options=options, smiles=smiles, style=style, width=width)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Jsme',
        namespace = 'dash_bio',
        propNames = c('id', 'eventSmiles', 'height', 'loading_state', 'options', 'smiles', 'style', 'width'),
        package = 'dashBio'
        )

    structure(component, class = c('dash_component', 'list'))
}

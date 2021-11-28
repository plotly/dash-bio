# AUTO GENERATED FILE - DO NOT EDIT

dashbioMolecule2dViewer <- function(id=NULL, height=NULL, loading_state=NULL, modelData=NULL, selectedAtomIds=NULL, width=NULL) {
    
    props <- list(id=id, height=height, loading_state=loading_state, modelData=modelData, selectedAtomIds=selectedAtomIds, width=width)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Molecule2dViewer',
        namespace = 'dash_bio',
        propNames = c('id', 'height', 'loading_state', 'modelData', 'selectedAtomIds', 'width'),
        package = 'dashBio'
        )

    structure(component, class = c('dash_component', 'list'))
}

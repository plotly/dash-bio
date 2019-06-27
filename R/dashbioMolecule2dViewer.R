# AUTO GENERATED FILE - DO NOT EDIT

dashbioMolecule2dViewer <- function(id=NULL, selectedAtomIds=NULL, width=NULL, height=NULL, modelData=NULL) {
    
    props <- list(id=id, selectedAtomIds=selectedAtomIds, width=width, height=height, modelData=modelData)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Molecule2dViewer',
        namespace = 'dash_bio',
        propNames = c('id', 'selectedAtomIds', 'width', 'height', 'modelData'),
        package = 'dashBio'
        )

    structure(component, class = c('dash_component', 'list'))
}

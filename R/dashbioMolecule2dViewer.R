# AUTO GENERATED FILE - DO NOT EDIT

dashbioMolecule2dViewer <- function(id=NULL, height=NULL, modelData=NULL, selectedAtomIds=NULL, width=NULL) {
    
    props <- list(id=id, height=height, modelData=modelData, selectedAtomIds=selectedAtomIds, width=width)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Molecule2dViewer',
        namespace = 'dash_bio',
        propNames = c('id', 'height', 'modelData', 'selectedAtomIds', 'width'),
        package = 'dashBio'
        )

    structure(component, class = c('dash_component', 'list'))
}

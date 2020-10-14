# AUTO GENERATED FILE - DO NOT EDIT

dashbioNglMoleculeViewer <- function(id=NULL, viewportWidth=NULL, viewportHeight=NULL, stageParameters=NULL, imageParameters=NULL, downloadImage=NULL, pdbString=NULL, data=NULL, molStyles=NULL) {
    
    props <- list(id=id, viewportWidth=viewportWidth, viewportHeight=viewportHeight, stageParameters=stageParameters, imageParameters=imageParameters, downloadImage=downloadImage, pdbString=pdbString, data=data, molStyles=molStyles)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'NglMoleculeViewer',
        namespace = 'dash_bio',
        propNames = c('id', 'viewportWidth', 'viewportHeight', 'stageParameters', 'imageParameters', 'downloadImage', 'pdbString', 'data', 'molStyles'),
        package = 'dashBio'
        )

    structure(component, class = c('dash_component', 'list'))
}

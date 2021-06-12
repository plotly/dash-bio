# AUTO GENERATED FILE - DO NOT EDIT

dashbioNglMoleculeViewer <- function(id=NULL, data=NULL, downloadImage=NULL, height=NULL, imageParameters=NULL, molStyles=NULL, pdbString=NULL, stageParameters=NULL, width=NULL) {
    
    props <- list(id=id, data=data, downloadImage=downloadImage, height=height, imageParameters=imageParameters, molStyles=molStyles, pdbString=pdbString, stageParameters=stageParameters, width=width)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'NglMoleculeViewer',
        namespace = 'dash_bio',
        propNames = c('id', 'data', 'downloadImage', 'height', 'imageParameters', 'molStyles', 'pdbString', 'stageParameters', 'width'),
        package = 'dashBio'
        )

    structure(component, class = c('dash_component', 'list'))
}

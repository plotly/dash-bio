# AUTO GENERATED FILE - DO NOT EDIT

dashbioMolecule3dViewer <- function(id=NULL, selectionType=NULL, backgroundColor=NULL, backgroundOpacity=NULL, styles=NULL, modelData=NULL, atomLabelsShown=NULL, selectedAtomIds=NULL, labels=NULL, onRenderNewData=NULL, onChangeSelection=NULL) {
    
    props <- list(id=id, selectionType=selectionType, backgroundColor=backgroundColor, backgroundOpacity=backgroundOpacity, styles=styles, modelData=modelData, atomLabelsShown=atomLabelsShown, selectedAtomIds=selectedAtomIds, labels=labels, onRenderNewData=onRenderNewData, onChangeSelection=onChangeSelection)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Molecule3dViewer',
        namespace = 'dash_bio',
        propNames = c('id', 'selectionType', 'backgroundColor', 'backgroundOpacity', 'styles', 'modelData', 'atomLabelsShown', 'selectedAtomIds', 'labels', 'onRenderNewData', 'onChangeSelection'),
        package = 'dashBio'
        )

    structure(component, class = c('dash_component', 'list'))
}

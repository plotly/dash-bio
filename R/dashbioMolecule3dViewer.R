# AUTO GENERATED FILE - DO NOT EDIT

dashbioMolecule3dViewer <- function(id=NULL, atomLabelsShown=NULL, backgroundColor=NULL, backgroundOpacity=NULL, labels=NULL, modelData=NULL, onChangeSelection=NULL, onRenderNewData=NULL, orbital=NULL, selectedAtomIds=NULL, selectionType=NULL, shapes=NULL, styles=NULL, zoom=NULL, zoomTo=NULL) {
    
    props <- list(id=id, atomLabelsShown=atomLabelsShown, backgroundColor=backgroundColor, backgroundOpacity=backgroundOpacity, labels=labels, modelData=modelData, onChangeSelection=onChangeSelection, onRenderNewData=onRenderNewData, orbital=orbital, selectedAtomIds=selectedAtomIds, selectionType=selectionType, shapes=shapes, styles=styles, zoom=zoom, zoomTo=zoomTo)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Molecule3dViewer',
        namespace = 'dash_bio',
        propNames = c('id', 'atomLabelsShown', 'backgroundColor', 'backgroundOpacity', 'labels', 'modelData', 'onChangeSelection', 'onRenderNewData', 'orbital', 'selectedAtomIds', 'selectionType', 'shapes', 'styles', 'zoom', 'zoomTo'),
        package = 'dashBio'
        )

    structure(component, class = c('dash_component', 'list'))
}

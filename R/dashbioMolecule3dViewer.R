# AUTO GENERATED FILE - DO NOT EDIT

dashbioMolecule3dViewer <- function(id=NULL, atomLabelsShown=NULL, backgroundColor=NULL, backgroundOpacity=NULL, height=NULL, labels=NULL, loading_state=NULL, modelData=NULL, onChangeSelection=NULL, onRenderNewData=NULL, orbital=NULL, selectedAtomIds=NULL, selectionType=NULL, shapes=NULL, style=NULL, styles=NULL, width=NULL, zoom=NULL, zoomTo=NULL) {
    
    props <- list(id=id, atomLabelsShown=atomLabelsShown, backgroundColor=backgroundColor, backgroundOpacity=backgroundOpacity, height=height, labels=labels, loading_state=loading_state, modelData=modelData, onChangeSelection=onChangeSelection, onRenderNewData=onRenderNewData, orbital=orbital, selectedAtomIds=selectedAtomIds, selectionType=selectionType, shapes=shapes, style=style, styles=styles, width=width, zoom=zoom, zoomTo=zoomTo)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Molecule3dViewer',
        namespace = 'dash_bio',
        propNames = c('id', 'atomLabelsShown', 'backgroundColor', 'backgroundOpacity', 'height', 'labels', 'loading_state', 'modelData', 'onChangeSelection', 'onRenderNewData', 'orbital', 'selectedAtomIds', 'selectionType', 'shapes', 'style', 'styles', 'width', 'zoom', 'zoomTo'),
        package = 'dashBio'
        )

    structure(component, class = c('dash_component', 'list'))
}

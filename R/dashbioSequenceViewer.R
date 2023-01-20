# AUTO GENERATED FILE - DO NOT EDIT

#' @export
dashbioSequenceViewer <- function(id=NULL, badge=NULL, charsPerLine=NULL, coverage=NULL, coverageClicked=NULL, legend=NULL, loading_state=NULL, mouseSelection=NULL, search=NULL, selection=NULL, sequence=NULL, sequenceMaxHeight=NULL, showLineNumbers=NULL, subpartSelected=NULL, title=NULL, toolbar=NULL, wrapAminoAcids=NULL) {
    
    props <- list(id=id, badge=badge, charsPerLine=charsPerLine, coverage=coverage, coverageClicked=coverageClicked, legend=legend, loading_state=loading_state, mouseSelection=mouseSelection, search=search, selection=selection, sequence=sequence, sequenceMaxHeight=sequenceMaxHeight, showLineNumbers=showLineNumbers, subpartSelected=subpartSelected, title=title, toolbar=toolbar, wrapAminoAcids=wrapAminoAcids)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'SequenceViewer',
        namespace = 'dash_bio',
        propNames = c('id', 'badge', 'charsPerLine', 'coverage', 'coverageClicked', 'legend', 'loading_state', 'mouseSelection', 'search', 'selection', 'sequence', 'sequenceMaxHeight', 'showLineNumbers', 'subpartSelected', 'title', 'toolbar', 'wrapAminoAcids'),
        package = 'dashBio'
        )

    structure(component, class = c('dash_component', 'list'))
}

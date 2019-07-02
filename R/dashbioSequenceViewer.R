# AUTO GENERATED FILE - DO NOT EDIT

dashbioSequenceViewer <- function(id=NULL, sequence=NULL, showLineNumbers=NULL, wrapAminoAcids=NULL, charsPerLine=NULL, toolbar=NULL, search=NULL, title=NULL, sequenceMaxHeight=NULL, badge=NULL, selection=NULL, coverage=NULL, legend=NULL, coverageClicked=NULL, mouseSelection=NULL, subpartSelected=NULL) {
    
    props <- list(id=id, sequence=sequence, showLineNumbers=showLineNumbers, wrapAminoAcids=wrapAminoAcids, charsPerLine=charsPerLine, toolbar=toolbar, search=search, title=title, sequenceMaxHeight=sequenceMaxHeight, badge=badge, selection=selection, coverage=coverage, legend=legend, coverageClicked=coverageClicked, mouseSelection=mouseSelection, subpartSelected=subpartSelected)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'SequenceViewer',
        namespace = 'dash_bio',
        propNames = c('id', 'sequence', 'showLineNumbers', 'wrapAminoAcids', 'charsPerLine', 'toolbar', 'search', 'title', 'sequenceMaxHeight', 'badge', 'selection', 'coverage', 'legend', 'coverageClicked', 'mouseSelection', 'subpartSelected'),
        package = 'dashBio'
        )

    structure(component, class = c('dash_component', 'list'))
}

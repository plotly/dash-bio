# AUTO GENERATED FILE - DO NOT EDIT

dashbioAlignmentChart <- function(id=NULL, colorscale=NULL, conservationcolor=NULL, conservationcolorscale=NULL, conservationmethod=NULL, conservationopacity=NULL, correctgap=NULL, data=NULL, eventDatum=NULL, extension=NULL, gapcolor=NULL, gapcolorscale=NULL, gapopacity=NULL, groupbars=NULL, height=NULL, numtiles=NULL, opacity=NULL, overview=NULL, scrollskip=NULL, sequenceIds=NULL, showconsensus=NULL, showconservation=NULL, showgap=NULL, showid=NULL, showlabel=NULL, textcolor=NULL, textsize=NULL, tickstart=NULL, ticksteps=NULL, tileheight=NULL, tilewidth=NULL, width=NULL) {
    
    props <- list(id=id, colorscale=colorscale, conservationcolor=conservationcolor, conservationcolorscale=conservationcolorscale, conservationmethod=conservationmethod, conservationopacity=conservationopacity, correctgap=correctgap, data=data, eventDatum=eventDatum, extension=extension, gapcolor=gapcolor, gapcolorscale=gapcolorscale, gapopacity=gapopacity, groupbars=groupbars, height=height, numtiles=numtiles, opacity=opacity, overview=overview, scrollskip=scrollskip, sequenceIds=sequenceIds, showconsensus=showconsensus, showconservation=showconservation, showgap=showgap, showid=showid, showlabel=showlabel, textcolor=textcolor, textsize=textsize, tickstart=tickstart, ticksteps=ticksteps, tileheight=tileheight, tilewidth=tilewidth, width=width)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'AlignmentChart',
        namespace = 'dash_bio',
        propNames = c('id', 'colorscale', 'conservationcolor', 'conservationcolorscale', 'conservationmethod', 'conservationopacity', 'correctgap', 'data', 'eventDatum', 'extension', 'gapcolor', 'gapcolorscale', 'gapopacity', 'groupbars', 'height', 'numtiles', 'opacity', 'overview', 'scrollskip', 'sequenceIds', 'showconsensus', 'showconservation', 'showgap', 'showid', 'showlabel', 'textcolor', 'textsize', 'tickstart', 'ticksteps', 'tileheight', 'tilewidth', 'width'),
        package = 'dashBio'
        )

    structure(component, class = c('dash_component', 'list'))
}

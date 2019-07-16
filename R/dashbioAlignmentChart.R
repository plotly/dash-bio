# AUTO GENERATED FILE - DO NOT EDIT

dashbioAlignmentChart <- function(id=NULL, eventDatum=NULL, data=NULL, extension=NULL, colorscale=NULL, opacity=NULL, textcolor=NULL, textsize=NULL, showlabel=NULL, showid=NULL, showconservation=NULL, conservationcolor=NULL, conservationcolorscale=NULL, conservationopacity=NULL, conservationmethod=NULL, correctgap=NULL, showgap=NULL, gapcolor=NULL, gapcolorscale=NULL, gapopacity=NULL, groupbars=NULL, showconsensus=NULL, tilewidth=NULL, tileheight=NULL, overview=NULL, numtiles=NULL, scrollskip=NULL, tickstart=NULL, ticksteps=NULL, width=NULL, height=NULL) {
    
    props <- list(id=id, eventDatum=eventDatum, data=data, extension=extension, colorscale=colorscale, opacity=opacity, textcolor=textcolor, textsize=textsize, showlabel=showlabel, showid=showid, showconservation=showconservation, conservationcolor=conservationcolor, conservationcolorscale=conservationcolorscale, conservationopacity=conservationopacity, conservationmethod=conservationmethod, correctgap=correctgap, showgap=showgap, gapcolor=gapcolor, gapcolorscale=gapcolorscale, gapopacity=gapopacity, groupbars=groupbars, showconsensus=showconsensus, tilewidth=tilewidth, tileheight=tileheight, overview=overview, numtiles=numtiles, scrollskip=scrollskip, tickstart=tickstart, ticksteps=ticksteps, width=width, height=height)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'AlignmentChart',
        namespace = 'dash_bio',
        propNames = c('id', 'eventDatum', 'data', 'extension', 'colorscale', 'opacity', 'textcolor', 'textsize', 'showlabel', 'showid', 'showconservation', 'conservationcolor', 'conservationcolorscale', 'conservationopacity', 'conservationmethod', 'correctgap', 'showgap', 'gapcolor', 'gapcolorscale', 'gapopacity', 'groupbars', 'showconsensus', 'tilewidth', 'tileheight', 'overview', 'numtiles', 'scrollskip', 'tickstart', 'ticksteps', 'width', 'height'),
        package = 'dashBio'
        )

    structure(component, class = c('dash_component', 'list'))
}

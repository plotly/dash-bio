# AUTO GENERATED FILE - DO NOT EDIT

dashbioSpeck <- function(id=NULL, data=NULL, scrollZoom=NULL, view=NULL, presetView=NULL) {
    
    component <- list(
        props = list(id=id, data=data, scrollZoom=scrollZoom, view=view, presetView=presetView),
        type = 'Speck',
        namespace = 'dash_bio',
        propNames = c('id', 'data', 'scrollZoom', 'view', 'presetView'),
        package = 'dashBio'
        )

    component$props <- filter_null(component$props)

    structure(component, class = c('dash_component', 'list'))
}
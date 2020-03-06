# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DashNgl(Component):
    """A DashNgl component.
The Molecule3dViewer component is used to render schematic diagrams
of biomolecules. It displays them in ribbon-structure diagrams
Read more about the component here:
https://github.com/IvoLeist/dash_ngl
Read more about the used WebGL protein viewer here:
https://github.com/arose/ngl

Keyword arguments:
- id (string; default 'viewport'): The ID of this component, used to identify dash components in
callbacks. The ID needs to be unique across all of the
components in an app.
- viewportStyle (dict; default {
    width: '100%',
    height: '500px',
}): The height (in px) and the width (in %) of the container
in which the molecules will be displayed.
It should be in JSON format
- stageParameters (dict; default {
    quality: 'medium',
    backgroundColor: 'white',
}): Parameters for the stage object of ngl.
Currently implemented are the quality of the visualisation
and the background color.For a full list see:
http://nglviewer.org/ngl/api/file/src/stage/stage.js.html
- data (optional): The data that will be used to display the molecule in 3D
The data will be in JSON format"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, viewportStyle=Component.UNDEFINED, stageParameters=Component.UNDEFINED, data=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'viewportStyle', 'stageParameters', 'data']
        self._type = 'DashNgl'
        self._namespace = 'dash_bio'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'viewportStyle', 'stageParameters', 'data']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DashNgl, self).__init__(**args)

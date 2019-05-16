# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Speck(Component):
    """A Speck component.


Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks.
- data (list; optional): The xyz file data; a list of atoms such that each atom
has a dictionary defining the x, y, and z coordinates
along with the atom's symbol.
- scrollZoom (boolean; optional): The option of whether or not to allow scrolling to control
the zoom.
- view (optional): An object that determines and controls various parameters
related to how the molecule is displayed.. view has the following type: dict containing keys 'aspect', 'zoom', 'translation', 'atomScale', 'relativeAtomScale', 'bondScale', 'rotation', 'ao', 'aoRes', 'brightness', 'outline', 'spf', 'bonds', 'bondThreshold', 'bondShade', 'atomShade', 'resolution', 'dofStrength', 'dofPosition', 'fxaa'.
Those keys have the following types:
  - aspect (number; optional)
  - zoom (number; optional)
  - translation (optional): . translation has the following type: dict containing keys 'x', 'y'.
Those keys have the following types:
  - x (number; optional)
  - y (number; optional)
  - atomScale (number; optional)
  - relativeAtomScale (number; optional)
  - bondScale (number; optional)
  - rotation (optional): . rotation has the following type: dict containing keys .
Those keys have the following types:

  - ao (number; optional)
  - aoRes (number; optional)
  - brightness (number; optional)
  - outline (number; optional)
  - spf (number; optional)
  - bonds (boolean; optional)
  - bondThreshold (number; optional)
  - bondShade (number; optional)
  - atomShade (number; optional)
  - resolution (number; optional)
  - dofStrength (number; optional)
  - dofPosition (number; optional)
  - fxaa (number; optional)
- presetView (a value equal to: 'default', 'stickball', 'toon', 'licorice'; optional): One of several pre-loaded views: default, stick-ball, toon,
and licorice"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, data=Component.UNDEFINED, scrollZoom=Component.UNDEFINED, view=Component.UNDEFINED, presetView=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'data', 'scrollZoom', 'view', 'presetView']
        self._type = 'Speck'
        self._namespace = 'dash_bio'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'data', 'scrollZoom', 'view', 'presetView']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Speck, self).__init__(**args)

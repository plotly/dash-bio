# AUTO GENERATED FILE - DO NOT EDIT

export dashbio_speck

"""
    dashbio_speck(;kwargs...)

A Speck component.
The Speck component is a WebGL-based 3D molecule renderer.
Read more about the component here:
https://github.com/wwwtyro/speck
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `data` (optional): The xyz file data; a list of atoms such that each atom
has a dictionary defining the x, y, and z coordinates
along with the atom's symbol.. data has the following type: Array of lists containing elements 'symbol', 'x', 'y', 'z'.
Those elements have the following types:
  - `symbol` (String; optional)
  - `x` (Real; optional)
  - `y` (Real; optional)
  - `z` (Real; optional)s
- `presetView` (a value equal to: 'default', 'stickball', 'toon', 'licorice'; optional): One of several pre-loaded views: default, stick-ball, toon,
and licorice
- `scrollZoom` (Bool; optional): The option of whether or not to allow scrolling to control
the zoom.
- `view` (optional): An object that determines and controls various parameters
related to how the molecule is displayed.. view has the following type: lists containing elements 'aspect', 'zoom', 'translation', 'atomScale', 'relativeAtomScale', 'bondScale', 'rotation', 'ao', 'aoRes', 'brightness', 'outline', 'spf', 'bonds', 'bondThreshold', 'bondShade', 'atomShade', 'resolution', 'dofStrength', 'dofPosition', 'fxaa'.
Those elements have the following types:
  - `aspect` (Real; optional)
  - `zoom` (Real; optional)
  - `translation` (optional): . translation has the following type: lists containing elements 'x', 'y'.
Those elements have the following types:
  - `x` (Real; optional)
  - `y` (Real; optional)
  - `atomScale` (Real; optional)
  - `relativeAtomScale` (Real; optional)
  - `bondScale` (Real; optional)
  - `rotation` (optional): . rotation has the following type: lists containing elements .
Those elements have the following types:

  - `ao` (Real; optional)
  - `aoRes` (Real; optional)
  - `brightness` (Real; optional)
  - `outline` (Real; optional)
  - `spf` (Real; optional)
  - `bonds` (Bool; optional)
  - `bondThreshold` (Real; optional)
  - `bondShade` (Real; optional)
  - `atomShade` (Real; optional)
  - `resolution` (Real; optional)
  - `dofStrength` (Real; optional)
  - `dofPosition` (Real; optional)
  - `fxaa` (Real; optional)
"""
function dashbio_speck(; kwargs...)
        available_props = Symbol[:id, :data, :presetView, :scrollZoom, :view]
        wild_props = Symbol[]
        return Component("dashbio_speck", "Speck", "dash_bio", available_props, wild_props; kwargs...)
end


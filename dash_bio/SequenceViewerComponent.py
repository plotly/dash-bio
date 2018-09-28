# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class SequenceViewerComponent(Component):
    """A SequenceViewerComponent component.


Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks.
- sequence (string; optional): The amino acid sequence that will be displayed.
- showLineNumbers (boolean; optional): The option of whether or not to display line numbers.
- wrapAminoAcids (boolean; optional): The option of whether or not to display the list of amino acids
as broken up into separate lines of a fixed length set by 
charsPerLine.
- charsPerLine (number; optional): The number of amino acids that will display per line.
- toolbar (boolean; optional): The option of whether or not to display a toolbar at the top
that allows the user to choose the number of letters per line.
- search (boolean; optional): The option of whether or not to include a search bar in
the header. This supports regex.
- title (string; optional): A string that displays at the top of the component.
- sequenceMaxHeight (string; optional): The maximum height of the sequence; default "400px".
- badge (boolean; optional): The option of whether or not to display a badge showing the
amino acid count at the top of the component beside the title.
- selection (list; optional): A highlighted section of the sequence; the color of the highlight 
can also be defined. Takes a list of format [min, max, color] where 
min is a number that represents the starting index of the selection, 
max is a number that represents the stopping index of the selection, 
and color is a string that defines the highlight color.
Cannot be used at the same time as coverage.
- coverage (list; optional): A coverage of the entire sequence; each section of the sequence
can have its own text color, background color, tooltip (on hover),
and an optional underscore. The props start and end represent the
beginning and terminating indices of the section in question.
Cannot be used at the same time as selection.
- legend (list; optional): A legend corresponding to the color codes above (optionally displayed).
- coverageClicked (number; optional): Contains the index of the section that was clicked last in 
the coverage.
- mouseSelection (string; optional): A string containing the mouse selection.
- subpartSelected (list; optional): A string containing all of the highlighted sections when 
using the search bar.

Available events: """
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, sequence=Component.UNDEFINED, showLineNumbers=Component.UNDEFINED, wrapAminoAcids=Component.UNDEFINED, charsPerLine=Component.UNDEFINED, toolbar=Component.UNDEFINED, search=Component.UNDEFINED, title=Component.UNDEFINED, sequenceMaxHeight=Component.UNDEFINED, badge=Component.UNDEFINED, selection=Component.UNDEFINED, coverage=Component.UNDEFINED, legend=Component.UNDEFINED, coverageClicked=Component.UNDEFINED, mouseSelection=Component.UNDEFINED, subpartSelected=Component.UNDEFINED, onMouseSelection=Component.UNDEFINED, onSubpartSelected=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'sequence', 'showLineNumbers', 'wrapAminoAcids', 'charsPerLine', 'toolbar', 'search', 'title', 'sequenceMaxHeight', 'badge', 'selection', 'coverage', 'legend', 'coverageClicked', 'mouseSelection', 'subpartSelected']
        self._type = 'SequenceViewerComponent'
        self._namespace = 'dash_bio'
        self._valid_wildcard_attributes =            []
        self.available_events = []
        self.available_properties = ['id', 'sequence', 'showLineNumbers', 'wrapAminoAcids', 'charsPerLine', 'toolbar', 'search', 'title', 'sequenceMaxHeight', 'badge', 'selection', 'coverage', 'legend', 'coverageClicked', 'mouseSelection', 'subpartSelected']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(SequenceViewerComponent, self).__init__(**args)

    def __repr__(self):
        if(any(getattr(self, c, None) is not None
               for c in self._prop_names
               if c is not self._prop_names[0])
           or any(getattr(self, c, None) is not None
                  for c in self.__dict__.keys()
                  if any(c.startswith(wc_attr)
                  for wc_attr in self._valid_wildcard_attributes))):
            props_string = ', '.join([c+'='+repr(getattr(self, c, None))
                                      for c in self._prop_names
                                      if getattr(self, c, None) is not None])
            wilds_string = ', '.join([c+'='+repr(getattr(self, c, None))
                                      for c in self.__dict__.keys()
                                      if any([c.startswith(wc_attr)
                                      for wc_attr in
                                      self._valid_wildcard_attributes])])
            return ('SequenceViewerComponent(' + props_string +
                   (', ' + wilds_string if wilds_string != '' else '') + ')')
        else:
            return (
                'SequenceViewerComponent(' +
                repr(getattr(self, self._prop_names[0], None)) + ')')

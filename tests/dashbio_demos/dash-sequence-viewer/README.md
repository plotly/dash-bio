## Run the app

```bash
python tests/dashbio_demos/dash-sequence-viewer/app.py
```
Then navigate to `localhost:8050` in your web browser.

## Usage

There are 3 tabs in this app: About, Data and Sequence.

The About tab contains a general overview of the Sequence Viewer component.

In Data tab you can select preloaded dataset or upload your own.

In Sequence tab you can choose number of entries, selection or coverage. Also,
you can check selection region, change color of the selection and translate selection
from DNA or RNA.

## Documentation

Learn more about using the Sequence Viewer with interactive examples in the [Dash Bio docs](https://dash.plotly.com/dash-bio/sequenceviewer).

## Sequence Viewer Properties Reference

- **id** (string; optional): The ID used to identify this component in Dash callbacks. 

- **badge** (boolean; default True): The option of whether or not to display a badge showing the amino acid count at the top of the component beside the title.         

- **charsPerLine** (number; default 40): The number of amino acids that will display per line.         

- **coverage** (list of dicts; optional): A coverage of the entire sequence; each section of the sequence can have its own text color, background color, tooltip (on hover), and an optional underscore. The props start and end represent the beginning and terminating indices of the section in question. Cannot be used at the same time as selection.    

- **coverage** is a list of dicts with keys:
    1. **bgcolor** (string; optional)
    2. **color** (string; optional)
    3. **end** (number; optional)
    4. **onclick** (optional)
    5. **start** (number; optional)
    6. **tooltip** (string; optional)
    7. **underscore** (boolean; optional)

- **coverageClicked** (number; optional): Contains the index of the section that was clicked last in the coverage list supplied.     

- **legend** (list of dicts; optional): A legend corresponding to the color codes above (optionally displayed).
- **legend** is a list of dicts with keys:
    1. **color** (string; optional)
    2. **name** (string; optional)
    3. **underscore** (boolean; optional)

- **mouseSelection** (dict; optional): Contains information about the subsequence selected by the mouse. Start and end refer to the initial and final indices, respectively, of the subsequence, and "selection" contains the string that is selected.   

- **mouseSelection** is a dict with keys:
    1. **end** (number; optional)
    2. **selection** (string; optional)
    3. **start** (number; optional)

- **search** (boolean; default True): The option of whether or not to include a search bar in the header. This supports regex.
- **selection** (optional): A highlighted section of the sequence; the color of the highlight can also be defined. Takes a list of format [min, max, color] where min is a number that represents the starting index of the selection, max is a number that represents the stopping index of the selection, and color is a string that defines the highlight color. Cannot be used at the same time as coverage.

- **sequence** (string; default '-'): The amino acid sequence that will be displayed.

- **sequenceMaxHeight** (string; default '400px'): The maximum height of the sequence.
- **showLineNumbers** (boolean; default True): The option of whether or not to display line numbers.
- **subpartSelected** (list of dicts; optional): A list of the subparts selected using the "search" function or the "selection" property.
- **subpartSelected** is a list of dicts with keys:
    1. **end** (number; optional)
    2. **sequence** (string; optional)
    3. **start** (number; optional)
- **title** (string; default ''): A string that displays at the top of the component.
- **toolbar** (boolean; default False): The option of whether or not to display a toolbar at the top that allows the user to choose the number of letters per line.
- **wrapAminoAcids** (boolean; default True): The option of whether or not to display the list of amino acids as broken up into separate lines of a fixed length set by charsPerLine.

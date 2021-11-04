## Run the app

```bash
python tests/dashbio_demos/dash-forna-container/app.py
```
Then navigate to `localhost:8050` in your web browser.

## Usage

There are 5 tabs in this app: About, Add New, Sequences, Colors, Title Pattern.

The About tab contains a general overview of the Forna-Container component.

In Add New tab you can specify the nucleotide sequence, specify the RNA secondary
structure. Also, you have a lot of another options here: apply force, circularize
external, avoid others, label interval, id. You can change all of them and will see
changes in the app in your browser.

In Sequences tab choose id of the sequences you would like to display and get
information about sequences by id.

In the Color tab you can choose color of the scheme.

In the Title Pattern tab you can specify the information which will be rendered.

## Documentation

Learn more about using the Forna Container with interactive examples in the [Dash Bio docs](https://dash.plotly.com/dash-bio/fornacontainer).

## Forna Container Properties Reference

- **id** (string; optional): The ID of this component, used to identify dash components in callbacks. The ID needs to be unique across all of the components in an app.  

- **allowPanningAndZooming** (boolean; default True): Allow users to zoom in and pan the display. If this is enabled, then pressing the 'c' key on the keyboard will center the view.

- **colorScheme** (a value equal to: 'sequence', 'structure', 'positions' or 'custom'; default 'sequence'): The color scheme that is used to color the nodes.  

- **customColors** (dict; optional): The custom colors used to color the nodes if the 'custom' option is chosen for the colorScheme prop. For example, if the domain is [0, 20], the range is ['yellow', 'red'], and the dictionary specified in 'colorValues' that corresponds to a molecule is {'6': 10}, the sixth nucleotide in that molecule will have a color that is perfectly in between yellow and red (i.e., orange), since 10 is perfectly in between 0 and 20.
- **customColors** is a dict with keys:
    1. **colorValues** (dict with strings as keys and values of type dict with strings as keys and values of type string | number; optional): A dictionary which contains keys, each of which are either an empty string ('') or the name of a molecule that has been defined in the name prop in the options for a sequence in the sequences property. The value corresponding to the key that is an empty string (if that key exists) is a "default" color scheme that will be applied first, and can be overridden by the color schemes defined for molecule-specific keys. The aforementioned color schemes each take the form of a dictionary in which the keys are the nucleotide positions and the values are either a) numbers to be normalized with respect to the scale defined in domain (so that their color will be calculated), or b) direct string representations of colors.
    2. **domain** (list of numbers; optional): The limits for the color scale. This is used with the range specified in range to calculate the color of a given nucleotide, based on the number that it is assigned.
    3. **range** (list of strings; optional): The range of colors that will be used in conjunction with the domain prop.

- **height** (number; default 500): The height (in px) of the container in which the molecules will be displayed.  

- **nodeFillColor** (string; optional): The fill color for all of the nodes. This will override any color scheme defined in colorScheme.  

- **sequences** (list of dicts; optional): The molecules that will be displayed.  

- **sequences** is a list of dicts with keys:
    1. **options** (dict; optional): Additional options to be applied to the rendering of the RNA molecule.
        **options** is a dict with keys:
          1. **applyForce** (boolean; optional): Indicate whether the force-directed layout will be applied to the displayed molecule. Enabling this option allows users to change the layout of the molecule by selecting and dragging the individual nucleotide nodes. True by default.
          2. **avoidOthers** (boolean; optional): Whether or not this molecule should "avoid" other molecules in the map.
          3. **circularizeExternal** (boolean; optional): This only makes sense in connection with the applyForce argument. If it's True, the external loops will be arranged in a nice circle. If False, they will be allowed to flop around as the force layout dictates. True by default.
          4. **labelInterval** (number; optional): Change how often nucleotide numbers are labelled with their number. 10 by default.
          5. **name** (string; optional): The molecule name; this is used in custom color scales.

- **sequence** (string; required): A string representing the RNA nucleotide sequence of the RNA molecule.  

- **structure** (string; required): A dot-bracket string (https://software.broadinstitute.org/software/igv/RNAsecStructure) that specifies the secondary structure of the RNA molecule.  

- **width** (number; default 300): The width (in px) of the container in which the molecules will be displayed.
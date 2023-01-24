
import dash
import dash_bio
import dash_html_components as html
from dash_bio.utils import xyz_reader


_data = None

with open('tests/dashbio_demos/dash-speck/data/methane.xyz', 'r') as f:
    _data = xyz_reader.read_xyz(datapath_or_datastring=f.read(),
                                is_datafile=False)

_COMPONENT_ID = 'test-speck'

app = dash.Dash(__name__)

app.layout = html.Div(
    dash_bio.Speck(
        id=_COMPONENT_ID,
        data=_data,
        view={
            "brightness": 0
        }
    )
)

if __name__ == '__main__':
    app.run_server(debug=True)
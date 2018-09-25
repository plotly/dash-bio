import dash_core_components as dcc
import plotly.graph_objs as go
from .clustergram import Clustergram


def ClustergramComponent(id, data, **kwargs):
    return dcc.Graph(
        id=id,
        figure=go.Figure(Clustergram(data, **kwargs).figure())
    )

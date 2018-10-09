import plotly.graph_objs as go
from .python_components.clustergram import Clustergram


def ClustergramComponent(id, data, **kwargs):
    return go.Figure(Clustergram(data, **kwargs).figure())

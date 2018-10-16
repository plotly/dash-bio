import plotly.graph_objs as go
from .component_factory.clustergram import Clustergram


def ClustergramComponent(data, computed_traces=None, **kwargs):
    if(computed_traces is not None):
        (fig, _) = Clustergram(data, **kwargs).figure(
            computed_traces=computed_traces
        )
        return(go.Figure(fig), computed_traces)
    else:
        (fig, ct) = Clustergram(data, **kwargs).figure()
        print('ct')
        return (go.Figure(fig), ct)

from .figure_factory._volcano import create_volcano
from .utils.pure_python_component_loader import _pure_python_component

@_pure_python_component(create_volcano)
def VolcanoPlot(*args,**kwargs):
    return create_volcano(*args, **kwargs)

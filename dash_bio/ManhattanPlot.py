from .figure_factory._manhattan import create_manhattan
from .utils.pure_python_component_loader import _pure_python_component

@_pure_python_component(create_manhattan)
def ManhattanPlot(*args,**kwargs):
    return create_manhattan(*args, **kwargs)

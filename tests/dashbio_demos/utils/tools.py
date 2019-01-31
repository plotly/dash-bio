# File adapted from dash-docs/tutorial/tools.py
from index import app


def exception_handler(func):
    def wrapper(path):
        try:
            return func(path)
        except Exception as e:
            print('\nError running {}\n{}'.format(
                path,
                ('======================================' +
                 '======================================')
            ))
            raise e
    return wrapper


@exception_handler
def load_example(path):
    with open(path, 'r') as _f:
        _source = _f.read()
        _example = _source

        # Use the global app assignment
        if 'app = dash.Dash' not in _example and 'app = CustomDash()' not in _example:
            raise Exception("Didn't declare app")
        _example = _example.replace('app = dash.Dash', '# app = dash.Dash')

        commented_configs = [
            'app.scripts.config.serve_locally',
            'app.css.config.serve_locally'
        ]
        for config in commented_configs:
            _example = _example.replace(
                config,
                '# {}'.format(config)
            )

        if 'import dash\n' not in _example:
            raise Exception("Didn't import dash")

        # return the layout instead of assigning it to the global app
        if 'app.layout = ' not in _example:
            raise Exception('app.layout not assigned')
        _example = _example.replace('app.layout = ', 'layout = ')

        # Remove the "# Run the server" commands
        if 'app.run_server' not in _example:
            raise Exception('app.run_server missing')
        _example = _example.replace(
            '\n    app.run_server',
            'print("Running")\n    # app.run_server'
        )

        scope = {'app': app}
        exec(_example, scope)

    return (
        _source,
        scope['layout']  # layout is a global created from the app
    )


def merge(*dict_args):
    """
    Given any number of dicts, shallow copy and merge into a new dict,
    precedence goes to key value pairs in latter dicts.
    """
    result = {}
    for dictionary in dict_args:
        result.update(dictionary)
    return result


def read_file(fn):
    with open(fn, 'r') as f:
        return f.read()

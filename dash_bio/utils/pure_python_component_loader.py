def _pure_python_component(create_func):
    def decorator(func_to_decorate):
        def new_func(*original_args, **original_kwargs):
            return func_to_decorate(*original_args, **original_kwargs)
        new_func.__name__ = func_to_decorate.__name__
        new_func.__doc__ = create_func.__doc__
        return new_func
    return decorator
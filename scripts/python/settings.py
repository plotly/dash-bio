import logging


def get_logger(output_dir, log_name):
    """Creates a log file and returns an object to interface with it.
    """
    logger = logging.getLogger(log_name)
    logger.setLevel(logging.DEBUG)
    # create file handler which logs even debug messages
    fh = logging.FileHandler(output_dir + log_name + '.log')
    fh.setLevel(logging.DEBUG)
    # create console handler with a higher log level
    ch = logging.StreamHandler()
    ch.setLevel(logging.ERROR)
    # create formatter and add it to the handlers
    formatter = logging.Formatter('%(asctime)s - %(levelname)s - %(message)s')
    fh.setFormatter(formatter)
    ch.setFormatter(formatter)
    # add the handlers to the logger
    logger.addHandler(fh)
    logger.addHandler(ch)
    return logger


def init(_fresh_run, _fill_cache, _output_dir, _cache_dir, log_name):
    """Initializes global variables that are readable from importing modules.
    """
    global fresh_run, fill_cache, output_dir, cache_dir
    fresh_run = _fresh_run
    fill_cache = _fill_cache
    output_dir = _output_dir
    cache_dir = _cache_dir
    return get_logger(output_dir, log_name)
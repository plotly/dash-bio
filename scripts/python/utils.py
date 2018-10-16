import settings

import pymysql
import urllib.request
import time
import re
import ast

fresh_run = settings.fresh_run
fill_cache = settings.fill_cache
output_dir = settings.output_dir
cache_dir = settings.cache_dir

_original_execute = pymysql.cursors.Cursor.execute
_original_fetchall = pymysql.cursors.Cursor.fetchall

class Cursor:

    def __init__(self):
        self.query = ''
        self._result = ''
        self._original_close = pymysql.cursors.Cursor.close

    def execute(self, query, args=None):
        file_name = \
            query.strip().replace('.', '_').replace('/', '_')\
                .replace(':', '_').replace('?', '_').replace('=', '_')\
                .replace('&', '_').replace(',', '').replace(' ', '_')\
                .replace('\n', '')

        cache_path = cache_dir + 'sql__' + file_name

        if fresh_run:
            cursor = _original_execute(self, query, args=args)
            if fill_cache:

                result = str(self.fetchall())
                open(cache_path, 'w').write(result)
            return cursor
        else:
            result = open(cache_path, 'r').read()
            _result = ast.literal_eval(result)
            if _result is None:
                num_results = 0
            else:
                num_results = len(_result)
            self._result = _result
            return num_results

    def fetchall(self):
        if fresh_run:
            return self._rows
        else:
            return self._result

    def close(self):
        if fresh_run:
            return self._original_close
        else:
            return


class Connection:
    def __init__(self, host=None, user=None, port=None):
        self.host = host
        self.user = user
        self.port = port
        self.cursorclass = pymysql.cursors.Cursor

    def cursor(self):
        return Cursor()


def db_connect(host, user=None, port=None):
    """Wrapper for pymmsql.connect; enables caching
    """

    if fresh_run and fill_cache is False:
        # Production run, fast; needs Internet
        return pymysql.connect(host, user=user, port=port)

    elif fresh_run and fill_cache:
        # Production run, slower; needs Internet
        connection = pymysql.connect(host, user=user, port=port)
        connection.cursorclass.execute = Cursor.execute
        connection.cursorclass.fetchall = Cursor.fetchall
        return connection

    elif fresh_run is False and fill_cache is False:
        # Development run, fastest; does not need Internet
        return Connection(host=host, user=user, port=port)


def request(url, request_body=None):
    """Wrapper for urllib.request; includes caching
    """
    file_name = \
        url.replace('.', '_').replace('/', '_').replace(':', '_') \
            .replace('?', '_').replace('=', '_').replace('&', '_')

    cache_path = cache_dir + file_name

    if fresh_run:
        if request_body is not None:
            req = urllib.request.Request(url, data=request_body)
            data = urllib.request.urlopen(req).read().decode()
        else:
            with urllib.request.urlopen(url) as response:
                data = response.read().decode('utf-8')
        if fill_cache:
            with open(cache_path, 'w') as file:
                file.write(data)
    else:
        with open(cache_path) as file:
            data = file.read()

    return data


def natural_sort(l):
    """From https://stackoverflow.com/a/4836734
    """
    convert = lambda text: int(text) if text.isdigit() else text.lower()
    alphanum_key = lambda key: [convert(c) for c in re.split('([0-9]+)', key)]
    return sorted(l, key=alphanum_key)


def time_ms():
    return int(round(time.time() * 1000))


def chunkify(lst, n):
    return [lst[i::n] for i in range(n)]
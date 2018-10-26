import json
import urllib.request
import warnings


def extract_mutations(target_url, fname=""):

    recieved_data = False
    try:
        with urllib.request.urlopen(target_url + fname) as url:
            data = json.loads(url.read())
        recieved_data = True
    except json.decoder.JSONDecodeError:
        warnings.warn('problem with the data format, not a JSON file')
    except urllib.error.HTTPError:
        warnings.warn("Error 404 : check your url or your internet connexion : %s" % (target_url + fname))

    x = []
    y = []
    mutationgroup = []
    if recieved_data:
        for data_item in data:
            x.append(data_item['coord'])
            y.append(data_item['value'])
            mutationgroup.append(data_item['category'])
    return x, y, mutationgroup


def extract_domains(target_url, fname=""):
    domains = []
    try:
        with urllib.request.urlopen(target_url + fname) as url:
            domains = json.loads(url.read())
    except json.decoder.JSONDecodeError:
        warnings.warn('problem with the data format, not a JSON file')
    except urllib.error.HTTPError:
        warnings.warn("Error 404 : check your url or your internet connexion : %s" % (target_url + fname))

    return domains

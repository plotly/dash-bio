import dash_bio
import re
import dash_core_components as dcc
import dash_html_components as html
import dash

members = dir(dash_bio)

# get the names of all components
all_components = [member for member in members if re.search(r'^[A-Z][a-zA-Z]+$', member) is not None]
react_components = [c.__name__ for c in dash_bio._components]
python_components = [c for c in all_components if c not in react_components]

regex = {
    'react': r'\s*([a-zA-Z]+)\s*\(([a-z\s|]*;*\s*[a-z]*)\):*[\.\s]*(.*)', 
    'python': r'\s*\(([a-zA-Z]+)\)\s*([a-zA-Z_]+)\s*:\s*(.*)'
}


def generate_table(component, component_type):
    sep = '-' if component_type == 'react' else ':param'

    doc = eval("dash_bio.{}".format(component)).__doc__

    if component_type == 'react':
        doc = doc.replace("  -", "...")
        
    props = doc.split(sep)

    tableRows = []

    for item in props:
        desc_sections = item.split('\n\n')

        partone = desc_sections[0]
    
        r = re.match(
            regex[component_type],
            partone.replace('\n', ' ')
        )
        if r is None:
            continue
        
        prop_optional = 'Yes'
        
        if component_type == 'python':
            (prop_type, prop_name, prop_desc) = r.groups()
        elif component_type == 'react':
            (prop_name, prop_type, prop_desc) = r.groups()
            if 'optional' not in prop_type:
                prop_optional = 'No'
            prop_type = prop_type.split(';')[0]

        if len(desc_sections) > 1:
            prop_desc += ' '
            prop_desc += desc_sections[1]
           
        tableRows.append(
            html.Tr([html.Td(dcc.Markdown(prop_name)),
                     html.Td(dcc.Markdown(prop_desc)),
                     html.Td(dcc.Markdown(prop_type)),
                     html.Td(dcc.Markdown(prop_optional))])
        )

    return html.Div([html.H1(component), html.Table(tableRows), html.Hr()])


app = dash.Dash()

app.layout = html.Div(
    [generate_table(component, 'react') for component in react_components] +
    [generate_table(component, 'python') for component in python_components]
)

if __name__ == '__main__':

    app.run_server(debug=True)

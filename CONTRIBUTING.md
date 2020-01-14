## Development

#### Prerequisites

- [Git](https://git-scm.com/)
- [node.js](https://nodejs.org/en/). We recommend using node.js v10.x, but all
  versions starting from v6 should work.  Upgrading and managing node versions
  can be easily done using [`nvm`](https://github.com/creationix/nvm) or its
  Windows alternatives.
- [`npm`](https://www.npmjs.com/) v6.x and up (which ships by default with
  node.js v10.x) to ensure that the
  [`package-lock.json`](https://docs.npmjs.com/files/package-lock.json) file is
  used and updated correctly.
- A Unix shell, to run the Bash commands given in these contribution
  guidelines. If you use Windows, you do not have a Unix shell automatically
  installed; you may want to use a Unix emulator such as Cygwin or an SSH
  client
  ([setup instructions](http://faculty.smu.edu/reynolds/unixtut/windows.html)).

#### Step 1: Clone the dash-bio repo and install its dependencies

```bash
git clone https://github.com/plotly/dash-bio.git
cd dash-bio
npm ci
```

#### Step 2: Develop

Development of a component for this repository comprises two parts:
the component itself, and a sample application that showcases the capabilities
of your component and how it interacts with Dash.

##### Components
Components can either be created using React, or they can be written
in pure Python. React components are written in `src/lib/components`
before being compiled into Python components that are in the
`dash_bio` folder. Python components are written in
`dash_bio/component_factory/` and must be imported in
`dash_bio/__init__.py`.

##### Installing new npm packages

If developing a new component based on a React library, please ensure
that you have already installed the correct versions of the
preexisting dependencies by running `npm ci`. Then, add the package to
`package.json` and run `npm i` to add it to the `package-lock.json` file.

###### Naming components
Components, regardless of whether they are written using React or
Python, need to be named in upper camel case. This is incredibly
important due to the amount of parsing we perform in our testing suite
and app deployments.

##### Demo applications 
Instead of creating standalone Dash apps for each component, there is a file
structure in place to create a main "gallery" page that contains links to each
(component) application. Consequently, the implementation of a component needs
to follow a specific file structure for the corresponding app to be displayed
and run correctly.

###### Setup
In the `tests/dashbio_demos/` subfolder, please create a file named
`app_{your component name in snake case}.py`. In this file, please include the
following functions:

* `layout()` should return whatever you would have in your `app.layout`. Due to
the way the CSS is set up for each application, it is advisable to create a
container `div` that will house your application, e.g.,
```python
def layout(): 
    return html.Div(id='my-component-container', children=[
        "A sample component", 
        dash_bio.MyComponent(id='my-component'),
        html.Div(id='my-component-output'),
    ])
```
* `callbacks(app)` should contain all of the callbacks in the application and
not return anything, e.g.,
```python 
def callbacks(app):
    @app.callback(
        Output('my-component-output', 'children'),
        [Input('my-component', 'someProperty')]
    )
    def update_output(property): 
        return "Value: {}".format(str(property))
```

###### Testing
Test out your application by going to the repository's root directory and
running

```bash
python index.py 
```
Then navigate to `localhost:8050` in your web browser. You should see the
gallery page. To get to your application, click on the square that displays the
name of your component upon hover.

You will need to quit the Python application and rerun it if you have made
changes to the Python file itself, or have recently rebuilt/reinstalled the
Dash Bio package. To see updated CSS changes, you can simply reload the webpage
in your browser.

###### CSS
All custom CSS stylesheets should go in the `assets/` folder. Please create a
stylesheet with a filename specific to your component. In addition, all ids and
class names in your application should be prefixed by the name of your
component (this is done so that the stylesheet for one application doesn't
accidentally affect another application).

Please note that the header on your application is part of the page; therefore,
if you want to make a container `div` for your application as mentioned in the
Setup subsection, please account for an extra height of `100px` that is taken
up by the header when you are specifying the height of the container.

###### Final touches 
In the `tests/dashbio_demos/images/` subfolder, please include a PNG file named
`pic_{your component name in snake case}.png`.

In your demo app file, please include the following functions:
* `description()` is responsible for the text that shows up on hovering over
your application in the gallery page. It should return a short string with a
description of the component, e.g.,
```python
def description():
    return "Display bioinformatics data with this component."
```
* `header_colors()` controls the appearance of the header for your application.
It should return a dictionary with any or all of the specified keys `bg_color`
(string), `font_color` (string), and `light_logo` (boolean). Please change the
background color from default, and try to choose one that isn't used for
another application, e.g.,
```python 
def header_colors(): 
    return {
        'bg_color': 'rgb(255, 0, 0)',
        'font_color': 'rgb(255, 255, 255)',
        'light_logo': True
    }
```

Please lint any additions to Python code with `pylint` and/or `flake8`.

Commit each changeset corresponding to a conceptual entity.
Write commit messages at the imperative (e.g., "Document workflow").
Each commit is small; a pull request typically consists of a few commits.

#### Step 3: Run tests locally

To run integration tests locally on, say, Google Chrome:
```bash
python -m venv venv
. venv/bin/activate
pip install -r tests/requirements.txt
pip install dash[testing]
pytest tests/integration
```
Do not worry if you get errors running this last command. You will have to
download a Chrome driver, install it, and add its path. Follow what the error
messages point to (this will be platform-specific).

To write more integration tests, please read this
[tutorial](https://dash.plot.ly/testing).

To run the suite of unit tests:
```bash
pip install dash_bio_utils
python tests/unit/unit_test_data_setup.py
npm run test
```

#### Step 4: Rebuild the package if necessary

If you have made changes to the JS code, then you need to rebuild the package:

```bash
npm run build
```

The auto-generated Python files will reflect your updates to the logic.
If, instead, you have made changes to the layout, you do not need to rebuild
the package.

#### Step 5: Submit a pull request (PR)

Fill out the description template in the GitHub interface.
When you submit the PR, a Heroku review app will be automatically created; it
will remain available for 5 days.


### Deployment 

*Deployment is done from the `master` branch only.*

#### Step 1: Initialize the app on the playground server
Log into your account on
[dash-playground.plotly.host](dash-playground.plotly.host) and create
a new application. The name of the application should consist of the
component name in lowercase, with words separated by dashes (`-`). The
deployment server will provide a remote repository URL that will
contain the app. Add it to the list of remotes by running `git
remote add [app name]-test [deployment server git URL]`.

#### Step 2: Edit and commit app-specific files

##### Step 2a: Edit the `Procfile`
Edit the `Procfile` at the root of the repository to say `gunicorn
tests.dashbio_demos.app_name:server`, where `app_name` is the name of
the app you want to deploy in the `tests/dashbio_demos/` folder. 

##### Step 2b: Edit `config.py`
Edit the `config.py` file at the root of the repository such that the variable
`DASH_APP_NAME` be set to the name of your app, but with `app`
replaced by `dash` and underscores (`_`) replaced by dashes
(`-`). (e.g., for `app_manhattan_plot`, the `DASH_APP_NAME` variable
should be set to `dash-manhattan-plot`.)

##### Step 2c: Commit the changes
Commit the `Procfile` and `config.py`, but *do not push to the
`dash-bio` repo*!

#### Step 3: Push to the playground server
Run `git push [app name]-test master`. This will deploy the app
on the playground server. Check that it works by visiting the URL that
is displayed in the console. Try out a few of the callbacks to make
sure that they are working.

#### Step 4: Initialize the app on the dash-gallery server and push to it 
Log into the `developers` account on
[dash-gallery.plotly.host](dash-gallery.plotly.host) and follow the same
instructions as in Step 1, but give this remote a different name
(e.g., by running `git remote add gallery [deployment server git
URL]`). Then, run `git push gallery master`.

#### Step 5: Undo the app-specific commit 
Run `git log` to find the ID of the commit prior to the one that you
just made to change the `Procfile`. Then, reset your local branch to
this commit so that the `index.py` app still deploys and runs
normally. You can do this by running `git reset --hard [commit ID]`.

#### Step 6: Ensure that your branch is even with `master` 
Since you've reverted the change, running `git diff` should return
nothing.

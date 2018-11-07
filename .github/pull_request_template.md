# Dash Bio pull request
- [ ] This is a new component 
- [ ] I am adding a feature to an existing component

## Name and description of your component

## Main libraries used in component
* Make sure you add links! 

## Before asking for a review
- [ ] I have gone through the [code review checklist](https://github.com/plotly/dash-component-boilerplate/blob/master/%7B%7Bcookiecutter.project_shortname%7D%7D/review_checklist.md)

## PR merging checklist
Please make sure you have done these things before asking for approval to finally merge. 
- [ ] Ensure that your `requirements.txt` is complete and contains the specific versions of all Python packages you are using (if you are running in a virtual environment and have only the necessary packages installed for your component, you can just use `pip freeze > requirements.txt`)
- [ ] Run your application successfully in a [virtual environment](https://realpython.com/python-virtual-environments-a-primer/)
- [ ] Delete `usage.py` (your application should be in `tests/dash/app_[app name].py`)  
- [ ] Add your sample test data into the tests/sample_data folder
- [ ] Update/regenerate `package-lock.json` (run `npm install`)  
- [ ] Regenerate tarball (run `python setup.py sdist`, then copy `dist/dash_bio-0.0.1.tar.gz` into the top-level directory)
- [ ] Address all comments in the code review, and look for a :dancer:! 

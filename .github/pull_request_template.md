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
- [ ] Replace `usage.py` by `app_[app name].py` and put that file into the `tests/dash` folder.
- [ ] Add your sample test data into the tests/sample_data folder. You should not need to add any files at the root level of the repository.
- [ ] Address all comments in the code review.
- [ ] Make sure you are up-to-date with the latest `master`: checkout the master branch with `git checkout master`, pull from latest master `git pull`, checkout to your branch `git checkout your-branch`, merge master into your branch `git merge master`. [Resolve conflicts](https://help.github.com/articles/resolving-a-merge-conflict-using-the-command-line/).
- [ ] Test all existing apps and make sure they are not broken and make changes as necessary to make it work with the other apps.
- [ ] Ensure that your `requirements.txt` is complete and contains the specific versions of all Python packages you are using (if you are running in a virtual environment and have only the necessary packages installed for your component, you can just use `pip freeze > requirements.txt`)
- [ ] Run your application successfully in a [virtual environment](https://realpython.com/python-virtual-environments-a-primer/)
- [ ] Update/regenerate `package-lock.json` (run `npm install`)  
- [ ] Regenerate tarball (run `python setup.py sdist`, then copy `dist/dash_bio-0.0.1.tar.gz` into the top-level directory)
- [ ] Ask for a final review and look for a :dancer:!

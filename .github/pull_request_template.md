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
- [ ] Update/regenerate `package-lock.json` (run `npm install`)  
- [ ] Rebuild (run `npm run build:all` or `npm run build:js` followed by `npm run build:py`
- [ ] Commit and push the files that were generated in the `dash-bio` folder  by the above command(s)
- [ ] Regenerate tarball (run `python setup.py sdist`, then copy `dist/dash_bio-0.0.1.tar.gz` into the top-level directory)
- [ ] Run your application successfully in a [virtual environment](https://realpython.com/python-virtual-environments-a-primer/)
- [ ] Ensure that your `requirements.txt` is complete and contains the specific versions of all Python packages you are using (if you are running in a virtual environment and have only the necessary packages installed for your component, you can just use `pip freeze > requirements.txt`)
- [ ] Ensure that you installed the tarball you generated with the above commands (run `pip install dash-bio-X.Y.Z.tar.gz`)
- [ ] Test all existing apps and make sure they are not broken and make changes as necessary to make it work with the other apps.
- [ ] Ask for a final review and look for a :dancer:!
- [ ] Have your dancer? Merge to master!

## DDS Deployment
- [ ] Get the `developers` user credentials from a dash-bio team member.
- [ ] Checkout the master branch of the dash-bio repository, make sure you have the latest master (`git pull`).
- [ ] Check remotes associated to your repository: `git remote -v`, make sure you have the dash-bio one: `https://dash-gallery.plotly.host/GIT/dash-bio`.
- [ ] If you don't have the dash-bio remote add it with https, ssh will not work: `git remote add dash-bio https://dash-gallery.plotly.host/GIT/dash-bio`.
- [ ] You will be asked to enter the `developers` user credentials, have them ready.
- [ ] Push local master to the dds dash-bio master: `git push dash-bio master`.

### DDS Deployment Debugging

- If running `git push dash-bio master` on `Windows`, you may encounter the following issue:
```
remote: User <username> does not have permissions to run git-hook on dash-bio, or dash-bio does not exist
remote: Access denied
To https://dash-gallery.plotly.host/GIT/dash-bio
 ! [remote rejected] master -> master (pre-receive hook declined)
error: failed to push some refs to 'https://dash-gallery.plotly.host/GIT/dash-bio'
```
This is because the `git cli` for `Windows` saves the credentials on the `client-side`. In order to solve this do the following:
```
Go to: Control Panel -> User Accounts -> Manage your credentials -> Windows Credentials -> Under Generic Credentials find: git:https://dash-gallery.plotly.host -> Remove credential OR edit username/password to provided account.
```

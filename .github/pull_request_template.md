# Dash Bio pull request
- [ ] This is a new component 
- [ ] I am adding a feature to an existing component
- [ ] I'm improving an existing feature

## Name and description of your component

## Main libraries used in component
* Make sure you add links!

## Before asking for a review
- [ ] I have gone through the [code review checklist](https://github.com/plotly/dash-component-boilerplate/blob/master/%7B%7Bcookiecutter.project_shortname%7D%7D/review_checklist.md)

## PR merging checklist
Please make sure you have done these things before asking for approval to finally merge. 
- [ ] Address all comments in the code review.
- [ ] Make sure you are up-to-date with the latest `master`: check out the master branch with `git checkout master`, pull the latest changes with `git pull origin master`, check out back to your branch with `git checkout your-branch`, merge (latest) master into your branch with `git merge master`. [Resolve conflicts](https://help.github.com/articles/resolving-a-merge-conflict-using-the-command-line/) if there are any, and finally `git push origin your-branch`.
- [ ] Update/regenerate `package-lock.json` (run `npm install`)  
- [ ] Ensure that your `requirements.txt` is complete
- [ ] Rebuild (run `npm run build:all` or `npm run build:js` followed by `npm run build:py`
- [ ] Regenerate tarball (run `python setup.py sdist`, then copy `dist/dash_bio-X.Y.Z.tar.gz` into the top-level directory)
- [ ] Ensure that you installed the tarball you generated with the above commands (run `pip install dash-bio-X.Y.Z.tar.gz`)
- [ ] Run your application successfully in a [virtual environment](https://realpython.com/python-virtual-environments-a-primer/) and test that other apps still run
- [ ] Commit and push the files that were generated in the `dash_bio/` subfolder by the above command(s)
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

- If running `git push dash-bio master` you may encounter the following issue:
```
remote: User <username> does not have permissions to run git-hook on dash-bio, or dash-bio does not exist
remote: Access denied
To https://dash-gallery.plotly.host/GIT/dash-bio
 ! [remote rejected] master -> master (pre-receive hook declined)
error: failed to push some refs to 'https://dash-gallery.plotly.host/GIT/dash-bio'
```

This may be because the `git` credentials are saved on the `client-side`. In order to solve this, do the following: 

#### Windows 
```
Go to: Control Panel -> User Accounts -> Manage your credentials -> Windows Credentials -> Under Generic Credentials find: git:https://dash-gallery.plotly.host -> Remove credential OR edit username/password to provided account.
```

#### OS X 
```
Go to: Keychain Access -> Search for dash-gallery.plotly.host -> Change "Account" to "developers" -> Click on "show password" -> Change the password to the one provided -> Click "Save Changes". 
```

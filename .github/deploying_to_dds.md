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
``

# Steps to take before merging 
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
- [ ] Have your dancer? Merge to master! Merge the default way, without squashing or rebasing.

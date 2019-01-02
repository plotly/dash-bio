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

#### Step 1: Clone the dash-bio repo and install its dependencies

```bash
git clone https://github.com/plotly/dash-bio.git
cd dash-bio
npm install
```

#### Step 2: Start developing

TODO: Describe a typical workflow between editor and web browser.

Please lint any additions to Python code with `pylint` and `flake8`.
TODO: Provide more guidance, perhaps along the lines of
http://yt-project.org/doc/developing/developing.html#automatically-checking-code-style

Commit each changeset corresponding to a conceptual entity.
Write commit messages at the imperative (e.g., "Document workflow").
Each commit is small; a pull request typically consists of a few commits.

#### Step 3: Run tests / example apps locally

TODO: Determine the kind of tests we are talking about.

Run the test suite locally:
```bash
# FIXME
python -m unittest discover tests
```

Run the app you have added or changed:
```bash
# FIXME
python tests/dash/app_alignment_viewer.py
```

#### Step 4: Rebuild the package

```bash
npm run build:all
```

TODO: Complete instructions.

#### Step 5: Submit a pull request (PR)

Fill out the description template in the GitHub interface.
When you submit the PR, a Heroku review app will be automatically created; it
will remain available for 5 days.

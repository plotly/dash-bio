## Development

#### Prerequisites

- [Git](https://git-scm.com/) 
- A Unix shell, to run the Bash commands given in these contribution 
  guidelines. If you use Windows, you do not have a Unix shell 
  automatically installed; you may want to use a Unix emulator such
  as Cygwin or an SSH client 
  ([setup instructions](http://faculty.smu.edu/reynolds/unixtut/windows.html)).

#### Development

Clone the `dash-bio-utils` repository:

```bash
git clone https://github.com/plotly/dash-bio-utils.git
cd dash-bio-utils
```

Any Python files that are written must adhere to the [PEP
8](https://www.python.org/dev/peps/pep-0008/) style guide. Run
`pylint` on the code:

```bash
pylint dash_bio_utils/
''`

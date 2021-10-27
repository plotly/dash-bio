# Changelog

## [0.0.8] - 2021-09-27
* [#19](https://github.com/plotly/dash-bio-utils/pull/19) Minor bugfix to remove type-constrained signature function to maintain support for Python<=3.8.

## [0.0.7] - 2021-09-26

### Added

* [#18](https://github.com/plotly/dash-bio-utils/pull/18) Added support for mmCIF and PDBx format files by reworking PDB parser helper function into a class-based module.(see [#16](https://github.com/plotly/dash-bio-utils/pull/16) and [#17](https://github.com/plotly/dash-bio-utils/pull/17) for more info).

### Changed

* [#15](https://github.com/plotly/dash-bio-utils/pull/18) Restructured PDB parser to use `parmed` library for sourcing PDB and CIF files, and refactored `create_mol3d_style`.

## [0.0.6] - 2021-02-09

### Added

* Added `ngl_parser` to parse PDB and cif files for highlights and chain data
with the `dash_bio` NglMoleculeViewer component.

## [0.0.5] - 2020-06-10

### Changed

* Locked biopython version for Py2 to last supported version

## [0.0.4] - 2019-11-19

### Removed

* Removed unused Ideogram parser.

## [0.0.3] - 2019-07-07

### Changed

* Standardized data parsers.

## [0.0.2] - 2019-05-29

### Added

* Added `chem_structure_reader` to allow for parsing PubChem files for
  molecular structural data for the `dash_bio` Molecule2dViewer
  component.

# Changelog

## UNRELEASED

### Added

* [#17](https://github.com/plotly/dash-bio-utils/pull/17) Added `mmCIF_parser` for parsing mmCIF and PDBx format files (see [#16](https://github.com/plotly/dash-bio-utils/pull/16) for more info).

### Changed

* [#15](https://github.com/plotly/dash-bio-utils/pull/15) Combined `styles_parser` into `pdb_parser`, and added support for loading remotely sourced PDB files.

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

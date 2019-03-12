# Changelog

## [0.0.8]

### Fixed
* Fixed issue with Clustergram not reordering rows and columns after clustering.

### Removed
* Removed mentions of Dash events in OncoPrint component.
* Removed properties which weren't used in Ideogram component.

### Changed
* Changed property `fullChromosomeLabels` so that it can be updated using dash callbacks
* Changed Imputer (deprecated) to SimpleImputer in Clustergram component.
* Changed property name `impute_function` to `imputer_parameters` in Clustergram component.

### Added
* Added ability to define custom colours in styles parser for Molecule3D.

## [0.0.7] - 2019-26-02

### Changed
* Changed unicode right arrow to greater-than sign in Circos for compatibility with Python 2.7.

## [0.0.6] - 2019-22-02

### Added
* Added requirements from files in `utils`, as well as from pure-Python components, to setup install requirements.
* Added more descriptive prop descriptions for Dash Ideogram.

## [0.0.5] - 2019-15-02

### Changed
* Changed filenames in `dash_bio/utils/` folder to be snake case instead of camel case.

## [0.0.4] - 2019-11-02

### Added
* Added recent update to Speck library to fix jumpy behavior on click-and-drag.

## [0.0.3] - 2019-06-02

### Added
* Added variables to define strings used in `_volcano.py` graph labels.

## [0.0.2] - 2019-05-02

### Fixed
* Fixed incompatibility issues with Dash `0.36.0`.

### Removed
* Removed all mentions of `fireEvent` and anything else that used Dash events (which have been removed).

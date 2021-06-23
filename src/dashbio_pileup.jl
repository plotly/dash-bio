# AUTO GENERATED FILE - DO NOT EDIT

export dashbio_pileup

"""
    dashbio_pileup(;kwargs...)

A Pileup component.
The Pileup component is a genome visualization component
developed by the the Hammerlab. It uses an
example integration of pileup.js and React (https://www.npmjs.com/package/pileup).
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks.
The ID needs to be unique across all of the components in an app.
- `className` (String; optional): className of the component div.
- `range` (optional): Object defining genomic location.
    Of the format: {contig: 'chr17', start: 7512384, stop: 7512544}. range has the following type: lists containing elements 'contig', 'start', 'stop'.
Those elements have the following types:
  - `contig` (String; optional): Name of contig to display. (ie. chr17)
  - `start` (Real; optional): Start location to display
  - `stop` (Real; optional): Stop location to display
- `reference` (optional): Object defining genomic reference.. reference has the following type: lists containing elements 'label', 'url'.
Those elements have the following types:
  - `label` (String; optional): Label to display by reference
  - `url` (String; optional): Url of 2bit file.
         https://genome.ucsc.edu/goldenPath/help/twoBit.html
- `style` (Dict; optional): Generic style overrides on the plot div
- `tracks` (optional): Array of configuration objects defining tracks initially displayed when app launches.
    See https://github.com/hammerlab/pileup.js#usage. tracks has the following type: Array of lists containing elements 'viz', 'vizOptions', 'label', 'source', 'sourceOptions'.
Those elements have the following types:
  - `viz` (a value equal to: 'coverage', 'genome', 'genes', 'features', 'idiogram', 'location', 'scale', 'variants', 'genotypes', 'pileup'; optional): Name of visualization. Must be one of
            (coverage, genome, genes, features, idiogram, location, scale,
            variants, genotypes, or pileup)
            See https://github.com/hammerlab/pileup.js/blob/master/src/main/pileup.js
  - `vizOptions` (optional): Options that define viz details.
            Options depend on the viz type selected.
  - `label` (String; optional): Label to display by track
  - `source` (a value equal to: 'bam', 'alignmentJson', 'variantJson', 'featureJson', 'idiogramJson', 'cytoBand', 'vcf', 'twoBit', 'bigBed', 'GAReadAlignment', 'GAVariant', 'GAFeature', 'GAGene'; optional): Data source to visualize. Must be one of
            (bam, vcf, alignmentJson, variantJson, featureJson, idiogramJson, cytoBand,
            vcf, twoBit, bigBed, GAReadAlignment, GAVariant, GAFeature, GAGene)
            See https://github.com/hammerlab/pileup.js/blob/master/src/main/pileup.js
  - `sourceOptions` (optional): Options that define data source.
            Options depend on the source selected.s
"""
function dashbio_pileup(; kwargs...)
        available_props = Symbol[:id, :className, :range, :reference, :style, :tracks]
        wild_props = Symbol[]
        return Component("dashbio_pileup", "Pileup", "dash_bio", available_props, wild_props; kwargs...)
end


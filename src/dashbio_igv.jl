# AUTO GENERATED FILE - DO NOT EDIT

export dashbio_igv

"""
    dashbio_igv(;kwargs...)

An Igv component.
The Igv component is an interactive genome visualization component
developed by the Integrative Genomics Viewer (IGV) team. It uses an
example integration of igv.js and React (https://www.npmjs.com/package/igv).
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks.
The ID needs to be unique across all of the components in an app.
- `className` (String; optional): className of the component div.
- `genome` (String; optional): String identifier defining genome (e.g. "hg19"). See https://github.com/igvteam/igv.js/wiki/Reference-Genome
    for details and list of supported identifiers. Note: One (but only one) of
    either genome or reference properties must be set. If both are set,
    the genome property will be ignored.
- `locus` (String; optional): Initial genomic location(s). Either a string or an array of strings.
    If an array a viewport is created for each location.
- `minimumBases` (Real; optional): Minimum window size in base pairs when zooming in
- `reference` (Dict; optional): Object defining reference genome. see https://github.com/igvteam/igv.js/wiki/Reference-Genome
    Note: One (but only one) of either genome or reference properties must be set. If both are set,
    the genome property will be ignored.
- `style` (Dict; optional): Generic style overrides on the plot div
- `tracks` (Array; optional): Array of configuration objects defining tracks initially displayed when app launches.
    see https://github.com/igvteam/igv.js/wiki/Tracks-2.0
"""
function dashbio_igv(; kwargs...)
        available_props = Symbol[:id, :className, :genome, :locus, :minimumBases, :reference, :style, :tracks]
        wild_props = Symbol[]
        return Component("dashbio_igv", "Igv", "dash_bio", available_props, wild_props; kwargs...)
end


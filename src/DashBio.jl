
module DashBio
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.7.0"

include("dashbio_alignmentchart.jl")
include("dashbio_circos.jl")
include("dashbio_fornacontainer.jl")
include("dashbio_ideogram.jl")
include("dashbio_igv.jl")
include("dashbio_molecule2dviewer.jl")
include("dashbio_molecule3dviewer.jl")
include("dashbio_needleplot.jl")
include("dashbio_nglmoleculeviewer.jl")
include("dashbio_oncoprint.jl")
include("dashbio_pileup.jl")
include("dashbio_sequenceviewer.jl")
include("dashbio_speck.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "dash_bio",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "async-alignment.js",
    external_url = "https://unpkg.com/dash-bio@0.7.0/dash_bio/async-alignment.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-circos.js",
    external_url = "https://unpkg.com/dash-bio@0.7.0/dash_bio/async-circos.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-ideogram.js",
    external_url = "https://unpkg.com/dash-bio@0.7.0/dash_bio/async-ideogram.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-igv.js",
    external_url = "https://unpkg.com/dash-bio@0.7.0/dash_bio/async-igv.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-pileup.js",
    external_url = "https://unpkg.com/dash-bio@0.7.0/dash_bio/async-pileup.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-moleculeviewer2.js",
    external_url = "https://unpkg.com/dash-bio@0.7.0/dash_bio/async-moleculeviewer2.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-moleculeviewer3.js",
    external_url = "https://unpkg.com/dash-bio@0.7.0/dash_bio/async-moleculeviewer3.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-needle.js",
    external_url = "https://unpkg.com/dash-bio@0.7.0/dash_bio/async-needle.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-nglmoleculeviewer.js",
    external_url = "https://unpkg.com/dash-bio@0.7.0/dash_bio/async-nglmoleculeviewer.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-onco.js",
    external_url = "https://unpkg.com/dash-bio@0.7.0/dash_bio/async-onco.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-sequence.js",
    external_url = "https://unpkg.com/dash-bio@0.7.0/dash_bio/async-sequence.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-speck.js",
    external_url = "https://unpkg.com/dash-bio@0.7.0/dash_bio/async-speck.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-alignment.js.map",
    external_url = "https://unpkg.com/dash-bio@0.7.0/dash_bio/async-alignment.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-circos.js.map",
    external_url = "https://unpkg.com/dash-bio@0.7.0/dash_bio/async-circos.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-ideogram.js.map",
    external_url = "https://unpkg.com/dash-bio@0.7.0/dash_bio/async-ideogram.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-igv.js.map",
    external_url = "https://unpkg.com/dash-bio@0.7.0/dash_bio/async-igv.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-pileup.js.map",
    external_url = "https://unpkg.com/dash-bio@0.7.0/dash_bio/async-pileup.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-moleculeviewer2.js.map",
    external_url = "https://unpkg.com/dash-bio@0.7.0/dash_bio/async-moleculeviewer2.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-moleculeviewer3.js.map",
    external_url = "https://unpkg.com/dash-bio@0.7.0/dash_bio/async-moleculeviewer3.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-needle.js.map",
    external_url = "https://unpkg.com/dash-bio@0.7.0/dash_bio/async-needle.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-nglmoleculeviewer.js.map",
    external_url = "https://unpkg.com/dash-bio@0.7.0/dash_bio/async-nglmoleculeviewer.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-onco.js.map",
    external_url = "https://unpkg.com/dash-bio@0.7.0/dash_bio/async-onco.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-sequence.js.map",
    external_url = "https://unpkg.com/dash-bio@0.7.0/dash_bio/async-sequence.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-speck.js.map",
    external_url = "https://unpkg.com/dash-bio@0.7.0/dash_bio/async-speck.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "bundle.js",
    external_url = "https://unpkg.com/dash-bio@0.7.0/dash_bio/bundle.js",
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "bundle.js.map",
    external_url = "https://unpkg.com/dash-bio@0.7.0/dash_bio/bundle.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_bio-shared.js",
    external_url = "https://unpkg.com/dash-bio@0.7.0/dash_bio/dash_bio-shared.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_bio-shared.js.map",
    external_url = "https://unpkg.com/dash-bio@0.7.0/dash_bio/dash_bio-shared.js.map",
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end


# Data generation


fastq files for basal and luminal can be downloaded from the following tutorial:

- Tutorial: https://bioinformatics-core-shared-training.github.io/RNAseq-R/
	and http://bioinf.wehi.edu.au/RNAseqCaseStudy/
- Data: https://figshare.com/s/f5d63d8c265a05618137

mm10 genome assembly was used.

fastq files were aligned using Rsubread in R version 4.0.3.
Reads were quantified using `featureCounts()` in Rsubread.
Limma and EdgeR were used to compute differential expression between genes.

Entrez GeneIDs were translated to mgi gene symbols using biomaRt.


Reads across all replicates were pooled into two bam files: one for basal and one
for luminal.

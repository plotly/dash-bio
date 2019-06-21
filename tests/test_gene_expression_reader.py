from __future__ import absolute_import

from dash_bio_utils.gene_expression_reader import read_soft

# This piece of toy data corresponds to the first 2161 characters of data file:
# url = 'https://raw.githubusercontent.com/plotly/dash-bio/master/tests/dashbio_demos/sample_data/'
# url = url + 'clustergram_GDS5373.soft'
DATASTRING = '^DATABASE = Geo\n!Database_name = Gene Expression Omnibus' + \
' (GEO)\n!Database_institute = NCBI NLM NIH\n!Database_web_link = http:' + \
'//www.ncbi.nlm.nih.gov/geo\n!Database_email = geo@ncbi.nlm.nih.gov\n!D' + \
'atabase_ref = Nucleic Acids Res. 2005 Jan 1;33 Database Issue:D562-6\n' + \
'^DATASET = GDS5373\n!dataset_title = miR-221 expression effect on pros' + \
'tate cancer cell line\n!dataset_description = Analysis of PC-3 prostat' + \
'e cancer cells expressing pre-miR-221. miR-221 is frequently downregul' + \
'ated in primary prostate cancer. Results provide insight into the role' + \
' of miR-221 in the pathogenesis of prostate cancer.\n!dataset_type = E' + \
'xpression profiling by array\n!dataset_pubmed_id = 24607843\n!dataset_' + \
'platform = GPL570\n!dataset_platform_organism = Homo sapiens\n!dataset' + \
'_platform_technology_type = in situ oligonucleotide\n!dataset_feature_' + \
'count = 54675\n!dataset_sample_organism = Homo sapiens\n!dataset_sampl' + \
'e_type = RNA\n!dataset_channel_count = 1\n!dataset_sample_count = 4\n!' + \
'dataset_value_type = count\n!dataset_reference_series = GSE45627\n!dat' + \
'aset_order = none\n!dataset_update_date = Nov 03 2014\n^SUBSET = GDS53' + \
'73_1\n!subset_dataset_id = GDS5373\n!subset_description = miR-122 expr' + \
'ession\n!subset_sample_id = GSM1110879,GSM1110880\n!subset_type = prot' + \
'ocol\n^SUBSET = GDS5373_2\n!subset_dataset_id = GDS5373\n!subset_descr' + \
'iption = control\n!subset_sample_id = GSM1110881,GSM1110882\n!subset_t' + \
'ype = protocol\n^DATASET = GDS5373\n#ID_REF = Platform reference ident' + \
'ifier\n#IDENTIFIER = identifier\n#GSM1110879 = Value for GSM1110879: N' + \
'r1_pre221; src: PC-3 cell  pre mir-221\n#GSM1110880 = Value for GSM111' + \
'0880: Nr2_pre221; src: PC-3 cell  pre mir-221\n#GSM1110881 = Value for' + \
' GSM1110881: Nr3_ctrl; src: PC-3 cell  control mir\n#GSM1110882 = Valu' + \
'e for GSM1110882: Nr4_ctrl; src: PC-3 cell  control mir\n!dataset_tabl' + \
'e_begin\nID_REF\tIDENTIFIER\tGSM1110879\tGSM1110880\tGSM1110881\tGSM11' + \
'10882\n1007_s_at\tMIR4640\t24.8302\t25.4542\t25.6869\t25.7307\n1053_at' + \
'\tRFC2\t25.6556\t25.7486\t25.9348\t25.8511\n117_at\tHSPA6\t22.3986\t21' + \
'.4459\t22.136\t21.6938\n121_at\tPAX8\t24.5789\t24.5075\t24.5385\t24.57' + \
'36\n1255_g_at\tGUCA1A\t21.416\t21.0745\t21.0107\t21.1167\n1294_at\tMIR' + \
'5193\t23.6715\t23.4425\t22.9409\t22.9591\n1316_at\tTHRA\t22.7604\t23.1' + \
'194\t23.0321\t23.0469\n'


def test_read_soft_datastring():
    """Test that SOFT data string can be read."""
    soft = read_soft(DATASTRING,
                     is_datafile=False)

    description = soft[0]
    assert 'title' in description.keys()

    subsets = soft[1]
    assert isinstance(subsets, dict)

    rows = soft[2]
    assert len(rows) == 7
    # first row is '1007_s_at'
    assert rows[0] == '1007_s_at'

    cols = soft[3]
    # SOFT reader keeps columns with label containing 'GSM'
    assert all(['GSM' in col for col in cols])


def test_read_soft_filtered():
    """Test that SOFT data string can be filtered."""
    soft = read_soft(DATASTRING,
                     is_datafile=False,
                     return_filtered_data=True,
                     rows=['1007_s_at', '1053_at', '117_at'],
                     columns=['GSM1110880', 'GSM1110881'])

    # when filtering, return only the filtered data
    assert soft.shape[0] == 3
    assert soft.shape[1] == 2

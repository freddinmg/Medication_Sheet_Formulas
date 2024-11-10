"This is a long one."
"This formula makes an unordered list based on information from 3 FILTER formulas. The first character in the concatination is the bullet (❤️‍🩹.) TEXTJOIN uses that same bullet, as well as line breaks for each entry."
"The criteria for the filter is 'cells marked true, which is recorded in THIS column.' The 'true' value is at the end of each table, not the first. (Column 'F.')"
"Each part collected by the filter is concatenated into a sentence. First part is 'color', second part is 'shape', third part is 'size.'"
"XLOOKUP was in the first draft of this formula, until I remembered/saw that XLOOKUP will only return the fisrt value. This formula is meant to collect ALL 'true' rows."
"'Buprop_150_RowNum' is a named range; one cell that updates its value every time a new row is added (or even removed.)"

=CONCATENATE("❤️‍🩹",TEXTJOIN(CHAR(10)&CHAR(10)&"❤️‍🩹",true,ARRAYFORMULA(FILTER(INDIRECT(IMPRINTS_ADDRESS("B",Buprop_150_RowNum)),INDIRECT(IMPRINTS_ADDRESS("F",Buprop_150_RowNum))=true)&", "&FILTER(INDIRECT(IMPRINTS_ADDRESS("C",Buprop_150_RowNum)),INDIRECT(IMPRINTS_ADDRESS("F",Buprop_150_RowNum))=true)&"-shaped, "&FILTER(INDIRECT(IMPRINTS_ADDRESS("D",Buprop_150_RowNum)),INDIRECT(IMPRINTS_ADDRESS("F",Buprop_150_RowNum))=true)&" sized pill with imprint of '"&FILTER(INDIRECT(IMPRINTS_ADDRESS("E",Buprop_150_RowNum)),INDIRECT(IMPRINTS_ADDRESS("F",Buprop_150_RowNum))=true)&"'")))

"This phrase, as it is now, creates THIS phrase:"
"❤️‍🩹Off-white, round-shaped, small-ish sized pill with imprint of 'L015'"

"If another row is also ticked, it'll read like this:"
"❤️‍🩹Off-white, round-shaped, small-ish sized pill with imprint of 'L015'

❤️‍🩹Pink, round-shaped, small-ish sized pill with imprint of '188'" 

"NUMBER_TO_COL2(number)"
"number = column index. 'A' is 1, 'B' is 2, 'D' is 4. Even works past 26 columns."

=regexextract(ADDRESS(1,number),"[A-Z]+")

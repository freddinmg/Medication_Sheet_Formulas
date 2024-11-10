"IMPRINTS_ADDRESS(letter,number)"
"letter = column (index) letter that's being referred to."
"number = amount of rows that the data range fills up."
"the first cell in the range starts at row 3; so, that displaces the row number by 2. 2 rows from the starting address (say, A3) would be A5."

=CONCATENATE("'Pill_Imprints_and_Such'!",letter,"3:",letter,number+2)

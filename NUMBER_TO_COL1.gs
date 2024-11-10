NUMBER_TO_COL1(letter,number)
"letter = the column letter of the referenced cell. If the source cell is "S14", the letter is 'S.'"
"number = the row index of the referenced cell. If the source cell is "S14", the number is '14.'"
"this formula is made in a way that can be filled down, if using a reference column!"

=regexextract(address(1,INDIRECT(letter&ROW(number))),"[A-Z]+")

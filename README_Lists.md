Making an automated numbered list in cells is a different beast from making bullet points. But, I figured out a way behind it!

I've done the latter by using "TEXTJOIN." There were parts of the cell that needed automatic updating from different cells, so, just making a line break and manual numbers wasn't a good idea.

For both of these situations, I used a TEXTJOIN inside of a "CONCATENATE." The first character of the concatenate was the character I wanted as the bullet. The delimeter for the TEXTJOIN was also the same bullet character.

I also used a line break between list items, of course. The way you do that inside of a formula is simply by using "CHAR(10)" in a formula (outside of any quotation marks.) 

I also used custom formulas (NUMBER_TO_COL1/NUMBER_TO_COL2) in it; all these do is convert a column index to a letter, either with a cell that includes an integer or with an integer (respectively.) Another is IMPRINTS_ADDRESS, which concatenates a phrase using one of the previous custom functions.

"In the formula below, the cell in the cell reference contains the number of filled rows on the data's page. So, IMPRINTS_ADDRESS takes that number and adds it to the dataset's top row (row 3.) Meanwhile, the SEQUENCE formula is taking that information and making a list from 1 to the amount of filled rows. 3 rows filled from A3 is A6. Sequence makes a list from 1-3."

=JOIN(CONCATENATE(CHAR(10)),ARRAYFORMULA(SEQUENCE(Backend!Z38)&". "& INDIRECT(IMPRINTS_ADDRESS("B",Backend!Z38)))) 

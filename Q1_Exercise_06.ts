/*
*************************************************************************
                            Hasan Mumtaz Mirza
                            Roll # PIAIC206850
*************************************************************************
Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
*/
let garbageName = "\n\t  \t  Hasan Mumtaz Mirza  \t\n\t\n  ";
let strippedName = garbageName.trim();
console.log("garbage name starts -->"+garbageName+"<-- garbage name ends.");
console.log("Stripped name starts -->"+strippedName+"<-- Stripped name ends.");
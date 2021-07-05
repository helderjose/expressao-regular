/*
https://www.w3schools.com/jsref/jsref_regexp_lastindex.asp
Specifies the index at which to start the next match.

Definition and Usage

The lastIndex property specifies the index at which to start the next match.
Note: This property only works if the "g" modifier is set.
This property returns an integer that specifies the character position immediately after the last match found by exec( ) or test( ) methods.
Note: exec( ) and test( ) reset lastIndex to 0 if they do not get a match.

Return Value:
Type: Number
Description:
An integer that specifies the character position immediately after the last match found by exec( ) or test( ) methods
*/

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_regexp_lastindex
// Do a global search for "ain" in a string, and output the index after a match is found:
var str = "The rain in Spain stays mainly in the plain";
var patt1 = /ain/g;

while (patt1.test(str) == true) {
  console.log("'ain' found. Index now at: "+patt1.lastIndex);
};

/*
'ain' found. Index now at: 8
'ain' found. Index now at: 17
'ain' found. Index now at: 28
'ain' found. Index now at: 43
*/
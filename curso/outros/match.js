/*
match é uma função da string.

The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.

Note: If the regular expression does not include the g modifier (to perform a global search),
the match() method will return only the first match in the string.

This method returns null if no match is found.
*/

var str = "The rain in SPAIN stays mainly in the plain";
var res = str.match(/ain/g);

console.log(res) //[ 'ain', 'ain', 'ain' ]
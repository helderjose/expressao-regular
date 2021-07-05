/*
https://www.w3schools.com/jsref/jsref_regexp_ndollar.asp

Matches any string with n at the end of it

The n$ quantifier matches any string with n at the end of it.
Tip: Use the ^n quantifier to match any string with n at the BEGINNING of it.

*/

// Do a global search for "is" at the end of a string:
// var str = "Is this his";
// var patt1 = /is$/g;
// var result = str.match(patt1);
// console.log(result); // is - o is encontrado é do "his"


// Do a global, multiline search for "is" at the end of each line in a string:
var str = "Is\nthis\nhis\n?";
var patt1 = /is$/gm;
var result = str.match(patt1);
console.log(result); // [ 'is', 'is' ]


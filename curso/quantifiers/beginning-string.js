/*
https://www.w3schools.com/jsref/jsref_regexp_ncaret.asp

Matches any string with n at the beginning of it.
The ^n quantifier matches any string with n at the beginning of it.
Tip: Use the n$ quantifier to match any string with n at the END of it.
*/

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_regexp_caret
// Do a global search for "Is" at the beginning of a string:
// var str = "Is this his";
// var patt1 = /^Is/g; 
// var result = str.match(patt1);
// console.log(result); //[ 'Is' ]


// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_regexp_m_3
// Do a global, case-insensitive, multiline search for "is" at the beginning of each line in a string:
var str = "\nIs th\nis h\nis?";
var patt1 = /^is/gmi; 
var result = str.match(patt1);
console.log(result); //[ 'Is', 'is', 'is' ]

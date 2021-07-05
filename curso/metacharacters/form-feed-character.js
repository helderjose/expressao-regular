/*
https://www.w3schools.com/jsref/jsref_regexp_formfeed.asp

The \f metacharacter is used to find a form feed character.

\f returns the position where the form feed character was found. If no match is found, it returns -1.
*/

// Search for a form feed character in a string:
var str = "Visit W3Schools.\fLearn Javascript.";
var patt1 = /\f/g;
var result = str.search(patt1);
console.log(result); // 16 - encontrou na posição 16
/*
https://www.w3schools.com/jsref/jsref_regexp_carriagereturn.asp

The \r metacharacter is used to find a carriage return character.

\r returns the position where the carriage return character was found. If no match is found, it returns -1.


*/

// Search for a carriage return character in a string:
var str = "Visit W3Schools.\rLearn Javascript.";
var patt1 = /\r/g;
var result = str.search(patt1);
console.log(result); // 16 - encontrou na posição 16
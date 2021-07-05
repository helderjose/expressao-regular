/*
https://www.w3schools.com/jsref/jsref_regexp_octal.asp

https://www.sciencebuddies.org/science-fair-projects/references/ascii-table

The \xxx character is used to find the Latin character specified by an octal number xxx.
If no match is found, it returns null.
*/

// Do a global search for octal number 127 (W) in a string:
var str = "Visit W3Schools. Hello World!"; 
var patt1 = /\127/g;
var result = str.match(patt1);
console.log(result); // W, W
/*
https://www.w3schools.com/jsref/jsref_regexp_newline.asp


The \n character is used to find a newline character.

\n returns the position where the newline character was found. If no match is found, it returns -1.
*/

// Search for a newline character in a string:
var str = "Visit W3Schools.\nLearn JavaScript.";
var patt1 = /\n/g;
var result = str.search(patt1);
console.log(result); // 16 - encontrou na posição 16
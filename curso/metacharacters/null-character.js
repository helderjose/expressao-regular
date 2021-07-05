/*
https://www.w3schools.com/jsref/jsref_regexp_nul.asp

\0 returns the position where the NUL character was found. If no match is found, it returns -1.
*/

// Search for a NUL character in a string:
var str = "Visit W3Schools.\0Learn Javascript.";
var patt1 = /\0/g;
var result = str.search(patt1);
console.log(result); // 16 - encontrou na posição 16
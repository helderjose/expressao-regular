/*
https://www.w3schools.com/jsref/jsref_regexp_tab.asp

The \t metacharacter is used to find a tab character.

\t returns the position where the tab character was found. If no match is found, it returns -1.


*/

// Search for a tab character in a string:
var str = "Visit W3Schools.\tLearn Javascript.";
var patt1 = /\t/g;
var result = str.search(patt1);
console.log(result); // 16 - encontrou na posição 16
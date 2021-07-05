/*
https://www.w3schools.com/jsref/jsref_regexp_begin.asp
Olhar beginning-word.js
*/

var str = "HELLO, LOOK AT ALO YOU!"; 
var patt1 = /LO\b/g;
var result = str.search(patt1);
var result2 = str.match(patt1);
console.log(result); // 3 - posição da palavra "HELLO"
console.log(result2); // LO, LO (HELLO e ALO)
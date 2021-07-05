/*
https://www.w3schools.com/jsref/jsref_regexp_vtab.asp
*/

var str = "Visit W3Schools.\vLearn Javascript.";
var patt1 = /\v/g;
var result = str.search(patt1);
console.log(result); // 16 - encontrou na posição 16
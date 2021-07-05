/*
https://www.w3schools.com/jsref/jsref_regexp_digit_non.asp
D maiúsculo
The \D metacharacter is used to find a non-digit character.
*/

var str = "Give 100%!"; 
var patt1 = /\D/g;
var result = str.match(patt1);

console.log(result); //G,i,v,e, ,%,!
/*
https://www.w3schools.com/jsref/jsref_regexp_digit.asp
d minúsculo
The \d metacharacter is used to find a digit from 0-9.
*/

var str = "Give 100%!";
var patt1 = /\d/g;
var result = str.match(patt1);
console.log(result);  //1,0,0
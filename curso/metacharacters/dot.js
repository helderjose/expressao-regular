/*
The . metacharacter is used to find a single character, except newline or other line terminators.

/h.t/g   procura por um "h", seguido de qualquer caracter (apenas um), seguido de um "t"

https://www.w3schools.com/jsref/jsref_regexp_dot.asp
*/

var str = "That's hot!";
var patt1 = /h.t/g;
var result = str.match(patt1);

console.log(result); //hat,hot
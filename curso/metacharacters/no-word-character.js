/*
https://www.w3schools.com/jsref/jsref_regexp_wordchar_non.asp

W maiúsculo
The \W metacharacter is used to find a non-word character.

A word character is a character from a-z, A-Z, 0-9, including the _ (underscore) character.
*/

var str = "Give 100%!ç_-";
var patt1 = /\W/g;
var result = str.match(patt1);

console.log(result);// ,%,!,ç,-    obs: o primeiro caracter do resultado é um espaço.
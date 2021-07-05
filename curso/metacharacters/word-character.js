/*
https://www.w3schools.com/jsref/jsref_regexp_wordchar.asp

w minúsculo

The \w metacharacter is used to find a word character.

A word character is a character from a-z, A-Z, 0-9, including the _ (underscore) character.
*/

var str = "Give 100%!ç_-";
var patt1 = /\w/g;
var result = str.match(patt1);

console.log(result); //G,i,v,e,1,0,0,_

/*
https://www.w3schools.com/jsref/jsref_regexp_whitespace.asp
Find a whitespace character.

s minúsculo
The \s metacharacter is used to find a whitespace character.

A whitespace character can be:

A space character
A tab character
A carriage return character
A new line character
A vertical tab character
A form feed character


Exemplos:
Do a global search for whitespace characters in a string
dado: "Is this all there is?"
/\s/g       // , , , 
*/



var str = "Is this all there is?";
var patt1 = /\s/g;
var result = str.match(patt1);
console.log(result);    //[ ' ', ' ', ' ', ' ' ]
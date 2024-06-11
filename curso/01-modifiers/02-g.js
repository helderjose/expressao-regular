/*
Global -> g
Percorre a string inteira (não pára no primeiro match).
Case sensitive

https://www.w3schools.com/jsref/jsref_regexp_g.asp
*/


var str = "Is this all there is?";
var patt = /is/;    // sem global
var result = str.match(patt);

console.log(result); // is  -> no index 5

patt = /is/g;
result = str.match(patt);
console.log(result);    // is, is.    obs: is -> this; is do is?
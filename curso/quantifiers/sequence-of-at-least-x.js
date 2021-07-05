/*
https://www.w3schools.com/jsref/jsref_regexp_nxcomma.asp

n{X,}
Matches any string that contains a sequence of at least X n's

Exemplos:

Do a global search for a substring that contains a sequence of at least three digits
dado: "100, 1000 or 10000?"
/\d{3,}/g       //100,1000,10000
*/

var str = "100, 1000 or 10000?";
var patt1 = /\d{3,}/g;
var result = str.match(patt1);

console.log(result);
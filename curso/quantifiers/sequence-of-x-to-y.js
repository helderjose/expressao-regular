/*
https://www.w3schools.com/jsref/jsref_regexp_nxy.asp

Matches any string that contains a sequence of X to Y n's

Exemplos:

Do a global search for a substring that contains a sequence of three to four digits
dado: "100, 1000 or 10000?"
/\d{3,4}/g      //100,1000,1000
*/


var str = "100, 1000 or 10000?";
var patt1 = /\d{3,4}/g;
var result = str.match(patt1);
console.log(result); // [ '100', '1000', '1000' ]
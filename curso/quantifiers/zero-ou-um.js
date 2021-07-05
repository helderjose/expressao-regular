/*
https://www.w3schools.com/jsref/jsref_regexp_zeroone.asp

Matches any string that contains zero or one occurrences of n

The n? quantifier matches any string that contains zero or one occurrences of n.
*/

// Do a global search for a "1", followed by zero or one "0" characters:
var str = "1, 100 or 1000?";
var patt1 = /10?/g; // procura o número 1 seguido de nenhum ou um 0
var result = str.match(patt1);

console.log(result); //1,10,10
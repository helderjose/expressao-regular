/*
https://www.w3schools.com/jsref/jsref_regexp_onemore.asp

Matches any string that contains at least one n

The n+ quantifier matches any string that contains at least one n.

exemplos:

Do a global search for at least one "o"
dado: "Hellooo World! Hello W3Schools!"
/o+/g       //ooo,o,o,oo

Do a global search for at least one word character
dado: "Hellooo World! Hello W3Schools!"
/\w+/g      //Hellooo,World,Hello,W3Schools
*/

var str = "Hellooo World! Hello W3Schools!";
var patt1 = /o+/g;
var result = str.match(patt1);

console.log(result); // ooo,o,o,oo
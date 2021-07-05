/*
https://www.w3schools.com/jsref/jsref_regexp_zeromore.asp

Matches any string that contains zero or more occurrences of n

The n* quantifier matches any string that contains zero or more occurrences of n.
*/


// Exemplos:
// Do a global search for an "l", followed by zero or more "o" characters
// dado: "Hellooo World! Hello W3Schools!"
// /lo*/g      //l,looo,l,l,lo,l

// Do a global search for a "1", followed by zero or more "0" characters
// dado: "1, 100 or 1000?"
// /10*/g      //1,100,1000





// Do a global search for an "l", followed by zero or more "o" characters:
var str = "Hellooo World! Hello W3Schools!";
var patt1 = /lo*/g; // começa com l seguido de zero ou mais o
var result = str.match(patt1);

console.log(result); //  l,looo,l,l,lo,l

/*
Saída: l,looo,l,l,lo,l
1 - l = primeiro l de Hellooo. (l com zero o)
2 - looo = segundo l de Hellooo. (l com vários o)
3 - l = l de world!
4 - l = primeiro l de Hello. (l sem nenhum 0)
5 - lo = segundo l de hello. (l com 1 o)
6 - l = l de W3Schools!
*/
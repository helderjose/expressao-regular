/*
https://www.w3schools.com/jsref/jsref_regexp_begin.asp

b minúsculo (começo da string, fim da string)

The \b metacharacter is used to find a match at the beginning or end of a word.


Search for the pattern at the beginning of a word like this:
\bLO
Search for the pattern at the end of a word like this:
LO\b


If no match is found, it returns:
null - usando match
-1   - usando search
*/


var str = "HELLO, LOOK AT YOU!"; 
var patt1 = /\bLO/g;
var result = str.search(patt1);
console.log(result); // 7 (encontrou na posição 7, O "LO" encontrado é do "LOOK")


// var str = "HELLO, LOOK AT YOU!"; 
// var patt1 = /\bLO/g;
// var result = str.match(patt1);
// console.log(result); // LO (da palavra LOOK)


// var str = "HELLO, LaOOK AT YOU!"; 
// var patt1 = /\bLO/g;
// var result = str.match(patt1);
// var result2 = str.search(patt1);
// console.log(result); // null
// console.log(result2); // -1


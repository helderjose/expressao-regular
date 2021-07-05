/*
https://www.w3schools.com/jsref/jsref_regexp_begin_not.asp

The \B metacharacter is used to find a match, but where it is NOT at the beginning/end of a word.

Search for the pattern NOT at the beginning of a word like this:
\BLO

Search for the pattern NOT at the end of a word like this:
LO\B

If no match is found, it returns null.
*/

// Find the first occurrence of "LO" where it is NOT at the END of a word:
var str = "HELLO, LOOK AT YOU!"; 
var patt1 = /LO\B/g;
var result = str.search(patt1);
// var result = str.match(patt1);
console.log(result); // 7 (achou na posição 7)
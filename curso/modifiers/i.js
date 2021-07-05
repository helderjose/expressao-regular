/*
i -> ignore case

https://www.w3schools.com/jsref/jsref_regexp_i.asp
*/

var str = "Is this all there is?";
var patt = /is/gi;    //g global; i ignore case
var result = str.match(patt);

console.log(result);    // Is, is, is
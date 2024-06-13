/*
Global -> g
Percorre a string inteira (não pára no primeiro match).
Case sensitive

https://www.w3schools.com/jsref/jsref_regexp_g.asp
*/


// Observer que a saída é diferente quando não usa global.


var str = "Is this all there is?";
var patt = /is/;    // sem global
var result = str.match(patt);

// "Is th[is] all there is?"
console.log(result); // [ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]
// ---------------------------------------------------------------



var str2 = "Is this all there is?";
var patt2 = /is/g;     // com global
var result2 = str.match(patt2);

// "Is th[is] all there [is]?"
console.log(result2);    // [ 'is', 'is' ]
// -----------------------------------------------------------------------
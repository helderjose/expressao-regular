/*
https://www.w3schools.com/jsref/jsref_regexp_nfollow_not.asp
Matches any string that is not followed by a specific string n.
The ?!n quantifier matches any string that is not followed by a specific string n.
Tip: Use the ?=n quantifier to match any string that IS followed by a specific string n.
*/

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_regexp_notahead
// Do a global, case insensitive search for "is" not followed by " all":
var str = "Is this all there is";
var patt1 = /is(?! all)/gi; 
var result = str.match(patt1);
console.log(result); //[ 'Is', 'is' ]

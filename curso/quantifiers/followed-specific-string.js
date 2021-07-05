/*
https://www.w3schools.com/jsref/jsref_regexp_nfollow.asp
Matches any string that is followed by a specific string n.
The ?=n quantifier matches any string that is followed by a specific string n.
Tip: Use the ?!n quantifier to match any string that is NOT followed by a specific string n.
*/

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_regexp_ahead
// Do a global search for "is" followed by " all":
var str = "Is this all there is";
var patt1 = /is(?= all)/g;
var result = str.match(patt1);
console.log(result); //[ 'is' ]

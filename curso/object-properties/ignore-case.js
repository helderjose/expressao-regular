/*
https://www.w3schools.com/jsref/jsref_regexp_ignorecase.asp
Checks whether the "i" modifier is set.

Definition and Usage
The ignoreCase property specifies whether or not the "i" modifier is set.
This property returns true if the "i" modifier is set, otherwise it returns false.
*/

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_regexp_ignorecase
// Check whether or not the "i" modifier is set:
var str = "Visit W3Schools!";
var patt1 = /W3S/i;
var res = patt1.ignoreCase;
console.log(res); //true
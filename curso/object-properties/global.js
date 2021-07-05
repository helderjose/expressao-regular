/*
https://www.w3schools.com/jsref/jsref_regexp_global.asp

Checks whether the "g" modifier is set

Definition and Usage
The global property specifies whether or not the "g" modifier is set.
This property returns true if the "g" modifier is set, otherwise it returns false.
*/


// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_regexp_global
// Check whether or not the "g" modifier is set:
var str = "Visit W3Schools!";
var patt1 = /W3S/g;
var res = patt1.global;
console.log(res); // true
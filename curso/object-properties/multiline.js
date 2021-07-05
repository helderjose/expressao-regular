/*
https://www.w3schools.com/jsref/jsref_regexp_multiline.asp
Checks whether the "m" modifier is set.

Definition and Usage
The multiline property specifies whether or not the m modifier is set.
This property returns true if the "m" modifier is set, otherwise it returns false.

Return Value
Type: Number
Description: Returns true if the "m" modifier is set, false otherwise
*/


// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_regexp_multiline
// Check whether or not the "m" modifier is set:
var str = "Visit W3Schools!";
var patt1 = /W3S/gi; // "g" and "i" is set, "m" is not.
var res = patt1.multiline;
console.log(res); //false
/*
https://www.w3schools.com/jsref/jsref_regexp_source.asp
Returns the text of the RegExp pattern.

Definition and Usage
The source property returns the text of the RegExp pattern.

Return Value
Type: String
Description: The text of the RegExp pattern
*/


// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_regexp_source
// Return the text of the RegExp pattern:
var str = "Visit W3Schools";
var patt1 = /W3S/g;
var res = "The text of the RegExp is: " + patt1.source;
console.log(res); //The text of the RegExp is: W3S
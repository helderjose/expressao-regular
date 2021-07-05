/*
https://www.w3schools.com/jsref/jsref_regexp_tostring.asp
Returns the string value of the regular expression.

Definition and Usage
The toString() method returns the string value of the regular expression.

Syntax
RegExpObject.toString()

Parameters
None.

Return Value
Type: String
Description: The string value of the regular expression
*/

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_regexp_tostring
// Return the string value of the regular expression:
var patt = new RegExp("Hello World", "g");
var res = patt.toString();
console.log(res); // /Hello World/g
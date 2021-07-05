/*
https://www.w3schools.com/jsref/jsref_regexp_test.asp
Tests for a match in a string. Returns true or false.

Definition and Usage
The test() method tests for a match in a string.
This method returns true if it finds a match, otherwise it returns false.

Syntax
RegExpObject.test(string)

Parameter Values
Parameter: string
Description: Required. The string to be searched

Return Value
Type: Boolean
Description: Returns true if it finds a match, otherwise it returns false
*/

// // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_regexp_test2
// // Search a string for the character "e":
// var str = "The best things in life are free";
// var patt = new RegExp("e");
// var res = patt.test(str);
// console.log(res); //true


// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_regexp_test
// Do a global search, and test for "Hello" and "W3Schools" in a string:
// The string:
var str = "Hello world!";

// Look for "Hello"
var patt = /Hello/g;
var result = patt.test(str);

// Look for "W3Schools"
patt2 = /W3Schools/g;
result2 = patt2.test(str);

console.log('result: ', result); //true
console.log('result2: ', result2); //false
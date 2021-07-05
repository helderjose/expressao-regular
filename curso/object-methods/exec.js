/*
https://www.w3schools.com/jsref/jsref_regexp_exec.asp
Tests for a match in a string. Returns the first match.

Definition and Usage
The exec() method tests for a match in a string.
This method returns the matched text if it finds a match, otherwise it returns null.

Syntax
RegExpObject.exec(string)

Parameter Values
Parameter: string
Description: Required. The string to be searched

Return Value
Type: Array
Description: An array containing the matched text if it finds a match, otherwise it returns null
*/

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_regexp_exec2
// Search a string for the character "e":
var str = "The best things in life are free";
var patt = new RegExp("e");
var res = patt.exec(str);
console.log(res);
/*
Saída no node:
[ 'e',
  index: 2,
  input: 'The best things in life are free',
  groups: undefined ]
*/


// // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_regexp_exec
// // Do a global search, and test for "Hello" and "W3Schools" in a string:
// // The string:
// var str = "Hello world!";

// // Look for "Hello"
// var patt = /Hello/g;
// var result = patt.exec(str);

// // Look for "W3Schools"
// var patt2 = /W3Schools/g;
// result2 = patt2.exec(str);
// console.log('result: ', result);
// console.log('result2: ', result2);

// /*
// Saída
// result:  [ 'Hello', index: 0, input: 'Hello world!', groups: undefined ]
// result2:  null
// */
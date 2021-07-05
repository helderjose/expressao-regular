/*
https://www.w3schools.com/jsref/jsref_regexp_constructor.asp
Returns the function that created the RegExp object's prototype.
The constructor property returns a regular expression's constructor function:

Definition and Usage
In JavaScript, the constructor property returns the constructor function for an object.
The return value is a reference to the function, not the name of the function:
For JavaScript regular expressions the constructor property returns function RegExp() { [native code] }
For JavaScript numbers the constructor property returns function Number() { [native code] }
For JavaScript strings the constructor property returns function String() { [native code] }
*/



// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_regexp_constructor
// The constructor property returns a regular expression's constructor function:
var patt = new RegExp("Hello World", "g");
var res = patt.constructor;
console.log(res); //[Function: RegExp] - retorno no node

// Do a global search for the hexadecimal number 57 (W) in a string:
var str = "Visit W3Schools. Hello World!"; 
var patt1 = /\x57/g;
var result = str.match(patt1);
console.log(result); // W, W
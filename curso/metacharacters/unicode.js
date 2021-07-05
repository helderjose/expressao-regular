/*
https://www.w3schools.com/jsref/jsref_regexp_unicode_hex.asp

https://www.utf8-chartable.de/unicode-utf8-table.pl?number=1024&unicodeinhtml=hex

The \udddd character is used to find the Unicode character specified by a hexadecimal number dddd.

If no match is found, it returns null.
*/

// Do a global search for the hexadecimal number 0057 (W) in a string:
var str = "Visit W3Schools. Hello World!"; 
var patt1 = /\u0057/g;
var result = str.match(patt1);
console.log(result); // W, W
/*
Find any of the alternatives specified

The (x|y) expression is used to find any of the alternatives specified.

The alternatives can be of any characters.

Do a global search to find any of the specified alternatives (red|green)
dado: "re, green, red, green, gren, gr, blue, yellow"
/(red|green)/g      //green,red,green

Do a global search to find any of the specified alternatives (0|5|7)
dado: "01234567890123456789"
/(0|5|7)/g      //0,5,7,0,5,7
*/

var str = "re, green, red, green, gren, gr, blue, yellow";
var patt1 = /(red|green)/g;  //procura por red ou green
var result = str.match(patt1);

console.log(result);  //green,red,green
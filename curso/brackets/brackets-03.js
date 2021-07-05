/*
Find any character between the brackets (any digit)

The [0-9] expression is used to find any character between the brackets.

The digits inside the brackets can be any numbers or span of numbers from 0 to 9.

Tip: Use the [^0-9] expression to find any character that is NOT a digit.


Exemplos:

Do a global search for the numbers 1, 2, 3 and 4 in a string
dado: "123456789"
/[1-4]/g        //1,2,3,4

Do a global search for the number "1" in a string
dado: "12121212"
/[1]/g      //1,1,1,1
*/

var str = "123456789";
var patt1 = /[1-4]/g; // pega os número de 1 a 4
var result = str.match(patt1);

console.log(result); //1,2,3,4
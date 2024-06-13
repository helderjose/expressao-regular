/*
Find any character NOT between the brackets (any non-digit)

The [^0-9] expression is used to find any character that is NOT a digit.

The digits inside the brackets can be any numbers or span of numbers from 0 to 9.

Tip: Use the [0-9] expression to find any character between the brackets that is a digit.


Exemplos:

Do a global search for the numbers that are NOT 1 to 4 in a string
dado: "123456789"
/[^1-4]/g       //5,6,7,8,9

Do a global search for numbers that are NOT "1" in a string
dado: "12121212"
/[^1]/g     //2,2,2,2

Do a global search for numbers that are NOT 5 to 8 in a string
dado: "123456789"
/[^5-8]/g       //1,2,3,4,9
*/

var str = "123456789";
var patt1 = /[^1-4]/g; //pega os números que não estão entre 1 a 4
var result = str.match(patt1);

console.log(result);  //5,6,7,8,9
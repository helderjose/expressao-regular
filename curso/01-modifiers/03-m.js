// https://www.w3schools.com/jsref/jsref_regexp_m.asp

/*
m -> multiline
^ -> começa com

O "m" é como se ignorasse a quebra de linha "\n".

Do a multiline search for "is" at the beginning of each line in a string
dado: "\nIs th\nis it?"
/^is/m      //is

Do a global, multiline search for "is" at the beginning of each line in a string
dado: "\nIs th\nis h\nis?"
/^is/gm     //is,is

Do a global, case-insensitive, multiline search for "is" at the beginning of each line in a string
dado: "\nIs th\nis h\nis?"
/^is/gmi        //Is,is,is

Do a global, multiline search for "is" at the end of each line in a string
dado: "Is\nthis\nhis\n?"
/is$/gm     //is,is
*/


var str = "\nIs th\nis it?";
var patt = /^is/m;  //  ^ -> começa com is
var result = str.match(patt);  // obs: começa com \n e não com is, por isso usamos m.

console.log(result); // is no index 7


str = "\nIs \nis it?";
patt = /^is/;
result = str.match(patt);  // obs: começa com \n e não com is, por isso null.

console.log(result); // null
/*
https://www.w3schools.com/jsref/jsref_regexp_charset_not.asp

Find any character NOT between the brackets


The [^abc] expression is used to find any character NOT between the brackets.

The characters inside the brackets can be any characters or span of characters:

    [abcde..] - Any character between the brackets
    [A-Z] - Any character from uppercase A to uppercase Z
    [a-z] - Any character from lowercase a to lowercase z
    [A-z ]- Any character from uppercase A to lowercase z

Tip: Use the [abc] expression to find any character between the brackets.

Examples:



ESTOU PASSANDO OS EXEMPLOS ABAIXO PARA O CÓDIGO CONFORME VOU REVISANDO


Do a global search for the character-span NOT from lowercase "a" to lowercase "h" in a string
dado: "Is this all there is?"
/[^a-h]/g       //I,s, ,t,i,s, ,l,l, ,t,r, ,i,s,?

Do a global search for the character-span NOT from uppercase "A" to uppercase "E"
dado: "I SCREAM FOR ICE CREAM!"
/[^A-E]/g       //I, ,S,R,M, ,F,O,R, ,I, ,R,M,!

Do a global search for the character-span NOT from uppercase "A" to lowercase "e"
dado: "I Scream For Ice Cream, is that OK?!"
/[^A-e]/g       //,r,m, ,o,r, , ,r,m,,, ,i,s, ,t,h,t, ,?,!

Do a global, case-insensitive search for the character-span that's NOT [a-s]
dado: "I Scream For Ice Cream, is that OK?!"
/[^a-s]/gi      //, , , ,,, , ,t,t, ,?,!
*/


// Do a global search for characters that are NOT inside the brackets [h]:
const str1 = "Is this all there is?";
const patt1 = /[^h]/g; //pega tudo que for diferente de h
const result1 = str1.match(patt1);
// [ 'I', 's', ' ', 't', 'i', 's', ' ', 'a', 'l', 'l', ' ', 't', 'e', 'r', 'e', ' ', 'i', 's', '?' ]
console.log(result1);


// Do a global search for characters that are NOT "i" and "s" in a string
const str2 = "Do you know if this is all there is?";
const patt2 = /[^is]/gi;
const result2 = str2.match(patt2);
// ['D', 'o', ' ', 'y', 'o', 'u', ' ', 'k', 'n', 'o', 'w', ' ', 'f', ' ', 't', 'h', ' ', ' ', 'a', 'l', 'l', ' ', 't', 'h', 'e', 'r', 'e', ' ', '?' ]
console.log(result2);
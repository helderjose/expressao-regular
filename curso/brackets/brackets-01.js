/*
Find any character between the brackets


The [abc] expression is used to find any character between the brackets.

The characters inside the brackets can be any characters or span of characters:

    [abcde..] - Any character between the brackets
    [A-Z] - Any character from uppercase A to uppercase Z
    [a-z] - Any character from lowercase a to lowercase z
    [A-z ]- Any character from uppercase A to lowercase z

Tip: Use the [^abc] expression to find any character NOT between the brackets.

Outros exemplos:
/[h]/g;  //Do a global search for the character "h" in a string:

Do a global search for the characters "i" and "s" in a string:
dado: "Do you know if this is all there is?"
/[is]/gi;  //i,i,s,i,s,i,s

Do a global search for the character-span from lowercase "a" to lowercase "h" in a string:
dado: "Is this all there is?"
/[a-h]/g    //h,a,h,e,e

Do a global search for the character-span from uppercase "A" to uppercase "E":
dado: "I SCREAM FOR ICE CREAM!"
/[A-E]/g    //C,E,A,C,E,C,E,A

Do a global search for the character-span from uppercase "A" to lowercase "e"
(will search for all uppercase letters, but only lowercase letters from a to e.).
obs: procura pelo alfabeto doto maiúsculo A-Z e até a-e
dado: "I Scream For Ice Cream, is that OK?!"
/[A-e]/g    //I,S,c,e,a,F,I,c,e,C,e,a,a,O,K

Do a global, case-insensitive search for the character-span [a-s]:
dado: "I Scream For Ice Cream, is that OK?!"
/[a-s]/gi   //I,S,c,r,e,a,m,F,o,r,I,c,e,C,r,e,a,m,i,s,h,a,O,K

A demonstration of "g" and "gi"-search for characters:
dado: "THIS This this"
/[THIS]/g   //T,H,I,S,T
/[THIS]/gi  //T,H,I,S,T,h,i,s,t,h,i,s
*/

var str = "Is this all there is?";
var patt1 = /[hi]/g;  // procura por h e por i
var result = str.match(patt1);

console.log(result); //h,i,h,i
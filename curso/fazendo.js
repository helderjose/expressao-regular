// var str = "re, green, red, green, gren, gr, blue, yellow";
// var patt1 = /(red|green)/g;
// var result = str.match(patt1)

// console.log(result)


var str = 'abcde'
var patt = /[^ae]/g; //pega tudo que for diferente de a, pega tudo que for diferente de e
var result = str.match(patt)

console.log(result)
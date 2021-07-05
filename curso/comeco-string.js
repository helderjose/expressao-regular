var str = "R$ 1.234,56";
var patt1 = /^[\D]*/g;
var result = str.match(patt1);

console.log(result);
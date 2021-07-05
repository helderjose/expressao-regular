let str = '123-meu-titulo'
// str = '123-9-meu-titulo'
// str = '123a-9-meu-titulo'
// str = 'abc123a-9-meu-titulo'
str = 'abc-meu-titulo'

let patt = /^\d+-([a-z]+|\d+|-)+/;
let result = patt.test(str);

console.log('result: ', result)
console.log(patt.test(str))

// if(result) {
//   console.log('result: ', result)
// } else {
//   console.log("nada encontrado")
// }


/*
palavras para testar

abc-meu-titulo
12abc-meu-titulo
12-abc-meu-t3itulo
12-5abc-meu-t3itulo
12-5abc-meu-t32itulo-
12-5abc-0meu-t32itulo-
12-56abc-0meu-t32itulo-
12-%abc-meu-t3itulo
12-abc-meu-t3ituçlo
12-abc-me45lçu-t3it%uçlo
*/
let str = '123-meu-titulo'
// str = '123-9-meu-titulo'
// str = '123a-9-meu-titulo'
// str = 'abc123a-9-meu-titulo'

let patt = /\d*/
let result = str.match(patt)[0]

if(result) {
  console.log('result: ', result)
} else {
  console.log("nada encontrado")
}


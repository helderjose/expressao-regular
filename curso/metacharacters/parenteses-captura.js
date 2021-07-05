/*
talvez seja bom colocar na pasta "brackets", exemplo com parênteses
https://www.w3schools.com/jsref/jsref_obj_regexp.asp - pesquisar por "brackets"
https://www.w3schools.com/jsref/jsref_regexp_xy.asp
*/

let link = '<https://api.github.com/user/487669/repos?per_page=3&page=57>; rel="last" <https://api.github.com/user/487669/repos?per_page=3&page=2>; rel="next"'

/*
link.match(/&page=(\d+)>; rel="last/)
Retorna um array onde:
index 0 é o match do padrão desejado
index 1 é a captura (\d+)
index 2 é o input, nesse caso a string link
*/
// console.log(link.match(/&page=(\d+)>; rel="last/))

/*
O que está entre parênteses é o que eu desejo capturar,
nesse caso o número 57 que vem depois do &page=57

Note que pega o índex 1, [1] no fim da expressão
*/
console.log(link.match(/&page=(\d+)>; rel="last/)[1])   //57




/*
pegar um pedaço da string.
pegar o pedaço desejado da string
*/
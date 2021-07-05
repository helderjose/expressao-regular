var str = "R$ 9.178.234,56";
// str = "1,56"
str = str.replace(/^[\D]*/, "");
str = str.replace(/\./g, "");
str = str.replace(",", ".");
console.log(str);


/*
Formatar para ponto flututante.
Formatar moeda para o service.
*/
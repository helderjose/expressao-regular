function newLine() {
  console.log("");
}

var regExp = /9999-9999/;
var telefone = "9999-9999";

// regExp = /(48) 9999-9999/;
// telefone = "(48) 9999-9999";
// console.log(regExp.test(telefone));  //false   precisa colocar contra barra no "(" e no ")"

regExp = /\(48\) 9999-9999/;
telefone = "(48) 9999-9999";
console.log(regExp.test(telefone));  //true
newLine();

// regExp = /\(48\) 9999-9999/;
// telefone = "O telefone é (48)9999-9999 tratar com João";
// console.log(regExp.exec(telefone));
// console.log(regExp.test(telefone));
// newLine();

// //começa com (48)9999
// regExp = /^\(48\) 9999-9999$/;
// telefone = "(48) 9999-9999";
// console.log(regExp.test(telefone));
// newLine();

// regExp = /^\([0-9][0-9]\) [0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;
// telefone = "(17) 9876-1234";
// console.log(regExp.test(telefone));
// newLine();

// // [0-9]{2} duas vezes um número de 0 a 9.
// // [0-9]{4} quatro vezes um número de 0 a 9.
// regExp = /^\([0-9]{2}\) [0-9]{4}-[0-9]{4}$/;
// telefone = "(17) 9876-1234";
// console.log(regExp.test(telefone));
// newLine();

// //[0-9]{4, 5} de quatro a cinco vezes um número de 0 a 9.
// regExp = /^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/;
// telefone = "(17) 9876-1234";
// console.log(regExp.test(telefone)); // true
// telefone = "(17) 99876-1234";
// console.log(regExp.test(telefone)); // true
// newLine();

// //quantificadores
// console.log("quantificadores: o ? indica opcional");
// regExp = /^\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}$/;
// //telefone = "(17) 9876-1234";
// console.log(regExp.test("(17) 9876-1234")); // true
// console.log(regExp.test("(17) 98761234")); // true

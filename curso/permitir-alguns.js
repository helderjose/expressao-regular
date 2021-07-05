// https://stackoverflow.com/questions/2295657/return-positions-of-a-regex-match-in-javascript

// var str = "a9b9c,d0e1f%"
// // str = str.replace(/^([0-9,%])/g, '');
// // str = str.replace(/\D/g, '');


// str = str.replace(/[^0-9,%]/g, '');

// console.log(str); //99,01%

// para cima estah ok

var re;
var match
var str = ",%8,a,9%,7,b,9,,c,%,%%d,,0,e,1,f,2,3%,"
// str = ",2,5,%,8,5%,9,%,"

str = str.replace(/[^0-9,%]/g, ''); //diferente de numero , e %
str = str.replace(/^[\D]*/, ""); //diferente de numero no comeco
str = str.replace(/[^0-9%]*$/, ""); //diferente de numero e % no final
str = str.replace(/,{2,}/g, ""); //duas , ou mais juntas
str = str.replace(/%{2,}/g, ""); //dois % ou mais juntos


var re = /%/g;

while((match = re.exec(str)) != null) {
    
    if(match.index != str.length - 1) {
        str = str.replace('%', '')
    }

}


re = /,/g;
var indexes = [];

while((match = re.exec(str)) != null) {
    indexes.push(match.index)
}

if(indexes.length > 1) {
    indexes.pop();
    indexes.forEach(index => {
        str = str.replace(',', '')
    })
}

// var re = /,{2,}/g;
// while((match = re.exec(str)) != null) {
//     console.log(match)
// }


// str = str.replace(/^[%]*$/, ""); // fazendo


// re = /%/g
// match = re.exec(str)

// console.log(match)

// while ((match = re.exec(str)) != null) {

//     if(match.index != str.length - 1) {
//         str = str.replace(str.charAt(match.index), '')
//     }

// }

// console.log("str antes", str)
// re = /,/g;
// var qtd = 0;
// while ((match = re.exec(str)) != null) {
    
//     if(match) {
//         qtd++;
//         if(qtd > 1) {
//             console.log(qtd, match)
//             str = str.replace(str.charAt(match.index), '');
//         }
//     }
// }

console.log(str);
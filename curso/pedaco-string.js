
// v1
// var str = "attachment;filename=ASCARTOES_CRD_000109_20181016.dat";


// var re = /filename=.*/g;

// str = re.exec(str)[0];
// str = str.replace("filename=", "");

// console.log(str)





// v2
var str = "attachment;filename=ASCARTOES_CRD_000109_20181016.dat";


var re = /filename=.*/g;
var res = str.match(re);



console.log(res)
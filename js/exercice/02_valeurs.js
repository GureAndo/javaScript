var a = 2;

a = a -1;
console.log("var a doit etre egale a 1 : " +a);

a++;// -- a + 1 
console.log("var a doit etre egale a 2 : " +a);

var b = 8; 

b += 2;
console.log("var b doit etre egale a 10: " +b);

var c = a + b * b;
console.log("var c doit etre egale a 102: " +c);

var d = a * b + b;
console.log("var d doit etre egale a 30: " +d )

var e = a * (b+b);
console.log("var e doit etre egale a 40: " + e);

var f = a * b / a;
console.log("var f doit etre egale a 10 : " + f );

var g = b / a * a;
console.log( "var g doit etre egale a 10 : " + g );

console.log( a, b, c, d, e, f, g, )



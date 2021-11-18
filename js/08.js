//alert("boucle")

/*
les bnoucle
*/

// la boucle FOR

/*
    for (3 argument){
        code
    }
    1. Inisialise un compteur, par defaut on utilise i
    2. la condition à verifier (vrai)
    3. "pas" d'incrementation ->combien j'ajoute par tour (i++), decrementtation -< combien je retire par tour (i--).
*/

for (var i = 1; i <= 10; i+= 2){
    document.write("<p> Instruction exécuté : " + i + " fois.</p>");
}

// la boucle While (tant que)
var j= 1; 
while (j <= 10){
    document.write("<p> Instruction exécuté : " + j + " fois.</p>");
    j++;
}

/* EXERCISE
j'ai 1000 euro sur mon compte chaque moi je rajoute 50 euro, 
Combien faut il de temps pour avoir 2000 euro sur mon compte?
*/


var k = 1000;
while (k <= 2000){                     
    document.write("<p> montant par mois: " + k +  "</p>");
    k = k  + 50;
}
document.write("<p> il faut : 21 mois</p>");

var tps= 0;
for ( var l =1000; l <=2000; l+= 50){
    document.write("<p>le mois suivant j'ai:" + l + " euro</p>");
    tps++;
}
document.write("<p> il faut : " + tps + " mois</p>");

//while 
//var monCompte = 1000; 
//var temps = 0;
//while (monCompte <2000){
  //mon compte += 50; 
  //temps++;   
//}

//document.write("<p> sous sur mon compte :" +  mon compte + "</p>");
//document.write("<p> jusqu' à 2000 euro, il me faut :" +  temps + "</p>");







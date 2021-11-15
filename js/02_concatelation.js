//alert("c'est bon");on a tester notre chemin avec une fonction alert()

/*------------------
LA CONCATENATION
--------------------*/

var annee = 2017; //variable de type nombre
var future = 5;
var calcul = annee + future; 
console.log(calcul);
document.write(calcul + "<br>");// Afiche le resultat sur la page avec un br

var mois = "7";
var calcul2 = annee + mois;
console.log(calcul2);
document.write(calcul2 + "<br>")

var debutPhrase ="Ajourd'hui ";
var nbStagiaires =  11;
var suitePhrase = " stagiaires";
var finPhrase = "sont présents.";
document.write(debutPhrase + nbStagiaires + suitePhrase + " " + finPhrase);
//le " " est souvent utilisé lors de la récuperation de données saisies par l'utilisateur
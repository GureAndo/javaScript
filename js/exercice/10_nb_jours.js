//alert("shadow isles");

var nb1 = parseInt(prompt("note un mois","saisir un chiffre entre 1 et 12"));
/*var nb2 = "1"
var nb2 = "2"
var nb2 = "3"
var nb2 = "4"
var nb2 = "5"
var nb2 = "6"
var nb2 = "7"
var nb2 = "8"
var nb2 = "9"
var nb2 = "10"
var nb2 = "11"
var nb2 = "12"

if(nb1 == 1){
    document.write("il y a 31 jours");
}else if ( nb1 == 3){
    document.write("il y a 31 jours");
}else if ( nb1 == 5){
    document.write("il y a 31 jours");
}else if ( nb1 == 7){
    document.write("il y a 31 jours");
}else if ( nb1 == 8){
    document.write("il y a 31 jours");
}else if ( nb1 == 10){
    document.write("il y a 31 jours");
}else if ( nb1 == 12){
    document.write("il y a 31 jours");
}else if ( nb1 == 4){
    document.write("il y a 30 jours");
}else if ( nb1 == 6){
    document.write("il y a 30 jours");
}else if ( nb1 == 9){
    document.write("il y a 30 jours");
}else if ( nb1 == 11){
    document.write("il y a 30 jours");
}else if ( nb1 == 2){
    document.write("il y a 29 jours");
}else{
    alert("ecrit un mois ")
}*/

if ((nb1 === 1) || (nb1 === 3) || (nb1 === 5) || (nb1 ===7) || (nb1 === 8) || (nb1 === 10) || (nb1 === 12)){
    document.write("il ya 31 jours");// mois a 31 jours
}else if ((nb1 === 4) || (nb1 === 6) || ( nb1 === 9) || (nb1 === 11)){
    document.write("il ya 30 jours ");// mois a 30 jours
}else if (nb1 === 2 ){
    document.write("il ya 28 jours ");// fevrier
}else{
    alert("ecris un nombre corespondant a un mois espece de gros CONNARD");
}


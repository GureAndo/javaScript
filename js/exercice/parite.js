/*alert("reussi sinon tu resetera une grosse merde")
for (var i =1; i <= 10; i++) {
    if (i % 2 === 0) {
      document.write("<p>" + i + " est pair " +"</p>");
    }
    if (i % 2 === 1){
        document.write("<p>" + i + " est impaire " +"</p>")
    }
}
document.write("<hr>")

var question = parseInt(prompt("note un Numero?"));


for (var nb = question ; nb <= question + 9  ; nb++) {
    if (nb % 2 === 0) {
      document.write("<p>" + nb + " est pair " +"</p>");
    }
    if (nb % 2 === 1){
        document.write("<p>" + nb + " est impaire "+ "</p>")
    }
}*/

for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        document.write("<p>" + i + " est pair " + "</p>");
    } else {
        document.write("<p>" + i + " est impair " + "</p>");
    }
}

var chiffre = parseInt(prompt("choisir nombre entier"));
var chifreMax = (chiffre+ 10);
while(chiffre>= chifreMax){
    if(chiffre%2 ===0){
        document.write("<p>" + chiffre + " est pair " + "</p>");
    }else{
        document.write("<p>" + chiffre + " est impair " + "</p>");
    }
}


var nbUser = parseInt(prompt("Ton chiffre"));
var nbUserMax = (nbUser + 11)
for(tour = nbUser; tour < nbUserMax; tour++){
    if(tour%2 ===0 ){
        
    }
}
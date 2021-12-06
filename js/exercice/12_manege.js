alert("ta reussi mais avec des putain de copier coller et apprend a ecrire correctement non mieux; pend toi Gros Naze")



var a= 1; 
while (a <= 10){
    document.write("<p> Le nombre de tour est : " + a + " fois.</p>");
    a++;
}


//var tours = prompt("combien de tours");
/*var b= 1; 
while (b <= tours){
    document.write("<p> Le nombre de tours est de : " + b + " fois.</p>");
    b++;
}*/

/*for (var c = 1; c <= tours ; c+=1){
    document.write("<p> Le nombre de tours est de : " + c + " fois.</p>");
}*/

// --------------------question 1

//-while

var manege = 0
while(manege< 10){
    manege++;
    document.write("c'est le tours n°" + manege + "<br>");
}
document.write("<hr>");


//-for

for( var i = 1; i <= 10; i++){
    document.write("c'est le tours n°" + i + "<br>");
}
document.write("<hr>");


//----------------------question 2

// prompt while
var question = parseInt(prompt("Combien de tours voulais vous faire ?"));
var compteur = 1;
while(compteur<= question){
    document.write("c'est le tours n°" + compteur + "<br>");
    compteur++;
}
document.write("<hr>");

//prompt for
var nbTours = parseInt(prompt("combien de tours voulais vous faire ?"));
for( var tour = 1;  tour <= nbTours; tour++){
    document.write("c'est le tours n°" + tour + "<br>");
}



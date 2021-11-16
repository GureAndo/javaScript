// alert("test");

// -- Structure de base IF

if(true){// entre parentaise la condition
    /*code*/
}

var nb1 = 1;
if (nb1 < 50){
    console.log("nb1 est bien inferieur a 50");
}

if(true){
    //code
}else{
    //code sinon
}

var nb1=60;
if(nb1 < 50 ){
    console.log(" nb1 est bien inferieur a 50");
}else{
    console.log("nb1 est superieur a 50");
}

// on utilise if pour verifier l'age de l'internate
// si il est majeu on lui souhete la bienvenue
// sinon [1] je lui signale et [2] je le revoie vers un autre site 

var age = prompt("entrer age");

if(age >= 18 ){
    document.write(" bienvenue");
    console.log ( "age est corecte")
}else{
    alert("c'est pas de ton age ")
    window.location.href = "https://universe.leagueoflegends.com/fr_FR/story/piece-of-shadow-cake/";
}

//var majoriterfr = 18 
//var age = parseInt(prompt("indiquer votre age"));

//if(age >= majoriterfr){
    //alert("bienvenue, vous ete majeur")
//}eles{
    //alert("aller voir un autre super site");
    //document.location.href = "https://www.pokemon.com/fr/"
//}






//alert("<br>")

/*var nb1 = parseInt (prompt("saisisez la moyenne"));
var nb2 = 10;
var nb3 = 12;

if( nb1 < nb2){
    document.write("<p> la note est de  " + nb1 + " par consequand tu est recalé . </p>");
}else if (nb1 <= nb3){
    document.write("<p> la note est de " + nb1 + " par consequand tu est recu . </p>");
}else if (nb1 >nb3){
    document.write("<p> la note est de " + nb1 + " bravo tu est recu avec mention . </p>");
}else{
    alert("veuiller entre une moyenne est pas un truc au pif  ")
}*/

var moyenne = parseFloat(prompt("quelle est ta moyenne au bac ?"));// parsefloat pour pouvoir metre des virgule au nombre.

if(moyenne < 10){
    document.write("tu es recalé !");
} else if ((moyenne >=10) && (moyenne < 12)){
    document.write("tu passe !");
}else if ((moyenne >= 12) && ( moyenne <=20)){
    document.write("bravo pour la mention !");
}else{
    document.write("et de 0 a 20 sa donne ??");
}

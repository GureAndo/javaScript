//alert("test");

var nb1 = parseInt (prompt("saisisez le Nombre 1"));
var nb2 = parseInt (prompt("saisisez le Nombre 2"));


if (nb1 > nb2){
    //document.write("<p> la valeur de " + nb1 + " est superieur a "  + nb2 + " . </p>");
}else if ( nb1 == nb2){
    document.write("<p> la valeur de " + nb1 + " est egale a "  + nb2 + " . </p>");
}else if ( nb1 < nb2){
    document.write("<p> la valeur de " + nb1 + " est inferieur a "  + nb2 + " . </p>");
}else{
    document.write("<p> ca c'est des lettres connard saisi des chiffres </p>");
}

//if ( (!isNaN(nb1)) && (!isNaN(nb2)) ){
    //if (nb1 < nb2){
        //document.write("votre 1er nombre : " + nb1 + "est plus petit que votre 2nd : " + nb2)
    //}else if (nb1 > nb2){
        //document.write("votre 1er nombre : " + nb1 + "est plus grand que votre 2nd : " + nb2)
    //}else{
        //document.write("votre 1er nombre : " + nb1 + "est plus egale que votre 2nd : " + nb2)
        //}
//}else{
    //alert("vous n'aver pas saisie de chiffres");
//}
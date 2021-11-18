//alert("test");

var nb1 = 123;
var nb2= "123";
console.log(nb1 == nb2);// true 
// == compare les valeurs

console.log(nb1 === nb2);// false
// === compare les valeurs et les types

console.log(nb1 != nb2);// false
// != different en valeur 

console.log( nb1 !== nb2);// true
// !== different en valeur et en type

//------------------- exercice ----------------


var nom = prompt ("entrer nom");
var a = "andô";
var b = "guren";
var c = "27";

if( a == nom){
    var prenom = prompt("entrer prenom");
}else{
    
    alert("haha raté");
}

if( b == prenom){
    var age = prompt(  "entrer age");
}else{
    alert("haha raté");
}

if( c == age){
    alert("c'est bon");
}else{
   
    alert("haha raté");
}
//----------------------corection---------------

// var prenom, monAge, prenomLogin, ageLogin;
//prenom = "sonia";
//monAge = 999;

//prenomLogin = prompt(" Quel est votre Prenom");
// if(prenomLogin === Prenom){

    //ageLogin = parsInt(prompt'("votre age ?"));
    //if (ageLogin === monAge){
    //alert("bienvenue" + prenomLogin);
    //}eles{
    //alert("votre age n'est pas dans la base de donée")
    //}
    //{}
//}else{
    //alert(" attention prenom non reconue");
//}
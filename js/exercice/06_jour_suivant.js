//alert("pas compris");

var jour = prompt("quel jour somme nous ??")
var a = "lundi"; 
var b = "mardi"; 
var c = "mercredi"; 
var d = "jeudi"; 
var e = "vendredi"; 
var f = "samedi"; 
var g = "dimanche";

if(a == jour){
    document.write("<p> demain nous seront " + b + "</p>");
}else if(b == jour){
    document.write("<p> demain nous seront " + c + "</p>");
}else if(c == jour){
    document.write("<p> demain nous seront " + d + "</p>");
}else if(d == jour){
    document.write("<p> demain nous seront " + e + "</p>");
}else if(e == jour){
    document.write("<p> demain nous seront " + f + "</p>");
}else if(f == jour){
    document.write("<p> demain nous seront " + g + "</p>");
}else if(g == jour){
    document.write("<p> demain nous seront " + a + "</p>");
}
else{
    alert("PUTIN UN JOUR DE LA SEMAINE !!!!!!!!!!!!!!!!!");
}


/*switch(jour){
    case "lundi":
        console.log("demain nous seront mardi");
        break;
    case "mardi":
        console.log("demain nous seront mercredi");
        break;
    case "lundi":
        console.log("demain nous seront jeudi");
        break;
    case "lundi":
        console.log("demain nous seront vendredi");
        break;
    case "lundi":
        console.log("demain nous seront samedi");
        break;
    case "lundi":
        console.log("demain nous seront dimanche");
        break;
    case "lundi":
        console.log("demain nous seront lundi");
        break;
    default:
        console.log("jour inconnu..... ta grand mere")    
}*/

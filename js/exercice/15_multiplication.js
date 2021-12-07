alert("bon j'ai encore fait des putin de copier coller comme un gros connard mais au moin sa passe en 7 ligne et pas en 12470 mais je reste un gros naze")

/*var table = parseInt(prompt("saisiser la table"))
while (table < 2 || table > 9) {
    alert("Vous avez saisie " + table + "  il n'appartient pas a une tables entre 2 et 9");
    table = prompt(table +" n'appartient pas a une table entre 2 et 9");
}

var resultat = '';
for (var i = 1; i <= 10; i++)resultat += i + ' x ' + table + ' = ' + (i * table) + '<br>';
document.write(resultat);

var resultat="";
for(var i= 1; i <= 10; i++)resultat += i + " x " + table + " = " + (i *table) + "<p>";
document.write(resultat)*/

/*var choix = prompt("choisi un nombre entre 2 et 9 :");
while((choix> 1) ||(choix <10)){
    if((choix >=2) &&(choix <=9)){
        for (var i = 1; i<=10; i++){
            var resultat = choix *i;
            document.write(choix+ " x " + i +" = " + resultat + "<br>");
        }
        break;
    }else{
        choix = Number( prompt("entrer un nombre entre 2 et 9 compris :"))
    }
}*/

//corection guy steevy
let input = Number.parseInt(prompt("please, enter a number beetween 1 abd 9 to display the multipication table."));
let i = 1;
let result = 0;

while(!((input >1)&&(input< 10))) {// tant que input n'est pas strictement superieur ou inferieur a 10
    alert("you have write a number beetween 1 and 9");
    input = Number.parseInt(prompt("try again, and enter a number beetween 1 and 9"));
}
for(i = 1; i <=10; i ++) {
    result= input*i;
    document.write ( "<p>" + input + " * " + i + " = " + result + "</p>" )
}

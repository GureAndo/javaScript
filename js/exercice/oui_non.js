alert("connard te plante pas non plus sur celui la et essaye de pas faire de copier coller sale fils de pute que je suis")


/*var jeu = prompt("Voulez-vous jouer à ni oui ni non ?");
while ((jeu !== "oui") && (jeu !== "non")) {
    jeu = prompt("Voulez-vous jouer à ni oui ni non ?");
}

alert("Vous avez perdu !");*/

var ditMoi ="";
var i = 1;
while((ditMoi !== "oui") && (ditMoi!== "non" )&&(ditMoi!=="Oui") &&(ditMoi !=="Non")){
    ditMoi=prompt("veut tu jouer a ni oui ni non");
    document.write('""' + ditMoi + '"n\' est pas une reponce, pour la ' + i + '°fois veut tu jouer a ni oui ni non? <br>'), i++;
}
i--;
document.write("<p style = 'background-color: cyan; text-align: center;' >perdu ; tu a tenu" + i + "tours</p>");

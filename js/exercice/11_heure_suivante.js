//alert("gros naze ta pas reuissi a syntetiser lexo en 20 ligne reussir en plus de 1400 ligne c pas sa  t'est une grosse merde CONNARD");
var heure = prompt("quel heure est t-il?");
var minute = prompt("quel minute est t-il?");
var seconde = prompt("quel second est t-il?");

if((heure >= 0) && (heure <= 23) && (minute >= 0) && (minute <= 59) && (seconde >= 0) && (seconde <= 59)){
    seconde++;
    if(seconde === 60){
        seconde = 0;
        minute++;
        if(minute === 60){
            minute= 0;
            heure++;
            if(heure === 24){
                heure= 0
            }
        }
    }
    document.write("<p> dans 1 seconde il sera" + heure +"h" + minute + "m" + seconde + "s </p>")
}else{
    document.write("heure incorect !! Connard t'est un naze ta pas reussi")
}


/*for( var i = 1; i <= 1; i++){
    document.write("#" + i + "<br>");
    document.write("##" + i + "<br>");
    document.write("###" + i + "<br>");
    document.write("####" + i + "<br>");
    document.write("#####" + i + "<br>");
    document.write("######" + i + "<br>");
    document.write("#######" + i + "<br>");
    document.write("########" + i + "<br>");
    document.write("#########" + i + "<br>");
    document.write("##########" + i + "<br>");
    document.write("############" + i + "<br>");
    
}*/

/*var symbole = '';
  
for (var i = 1; i <= 7; i++) {
    console.log(symbole += "#" );

}*/

var diese="";
var rang;
for(rang = 0; rang <=7; rang++){
    diese+="#";
    document.write(diese + '<br>')
}


var ligne ="";
var i = 1;
while(i <= 7){
    ligne+='#';
    console.log(ligne);
    i++;
}
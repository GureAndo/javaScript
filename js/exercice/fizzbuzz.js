
for (var i = 1; i <= 100; i++) {
    if ((i % 3 == 0)&&( i % 5==0 )) {
      document.write(i +"<br>");
      console.log
    }
    else if (i%  3 == 0){
        document.write(" buzz <br>");
    }
    else if(i % 5 == 0){
        document.write( "buzz <br>");
    }
    else{
        document.write(i + "<br>");
    }
}

for(var nombre=1; nombre <=100; nombre++){
    if((nombre%3===0)&&(i % 5===0))console.log("fizzbuzz");
    else if (nombre%3===0)console.log("fizz");
    else if (nombre%5===0)console.log("fizz");
    else console.log(nombre);
}
//alert("Pentakill")
var nb1 = Number(prompt("entrer nb1 :"));
var nb2 = Number(prompt("entrer nb2 :"));
var nb3 = Number(prompt("entrer nb3 :"));


if (nb1 > nb2) {
    nb1 = nb3 * 2;
} else {
    nb1++;
    if (nb2 > nb3) {
        nb1 = nb1 + nb3 * 3;
    } else {
        nb1 = 0;
        nb3 = nb3 * 2 + nb2
    }
}

document.write("le nombre 1 vaut: " + nb1)
document.write(" le nombre 2 vaut: " + nb2)
document.write(" le nombre 3 vaut: " + nb3)

console.log("nb1 = " + nb1);
console.log("nb2 = " + nb2);
console.log("nb3 = " + nb3);
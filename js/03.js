//alert("c'est bon"); fonction qui permet d'afficher un boite ...

// -- 1. les addition

// je declare plusieurs variable
var nb1, nb2, resultat;
// j'afecte des valeurs

nb1 = 10;
nb2 = 5;

// j'utilise les variable avec calcul
resultat = nb1 + nb2;

// j'affiche le resultat dans la console 
console.log(resultat);

// -- 2. soustraction
resultat = nb1 - nb2;
console.log(resultat);

// -- 3. multiplication
resultat = nb1 * nb2;
console.log(resultat);

// -- Division
resultat = nb1 / nb2;
console.log(resultat);

// -- 5. Modulo
// le modulo retourne le reste d'une division
resultat = nb1 % nb2;
console.log(resultat);

nb1 = 11;
resultat = nb1 % nb2;
console.log("reste de la division de " + nb1 + " par " + nb2 +" est egale a : " + resultat);

// -- 6. Ecriture simplifiées 
nb1 = 15;
nb1 = nb1 +5; // egale a 20

nb1 += 10; // nb1 = nb1 + 10
console.log('le resultat de "nb1 +=10" est ' + nb1);

nb2 -= 2; // -- nb2 = nb2 - 2
console.log(nb2);// l'ecriture simplifier fonctionne aussi avec les autre operateurs

// je peux echapper un caractere avec un anti-slash (alt gr + 8)


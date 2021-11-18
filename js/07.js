//alert("test");

// l'operateur ET : && ou alors avec AND sert a cumuler 2 condition

if(( prenomLogin === prenom) && (ageLogin === monAge)){
    /* code si les 2 instruction sont vrais*/
}

if ((A) && (B)){...}
=>si A est FAUX et B est VRAIS => FAUX
=>si A est VRAIS et B est FAUX => FAUX
=>si A est FAUX et B est FAUX => FAUX
=>si A est VRAIS et B est VRAIS => VRAIS

// l'opperateur OU : || ou OR (| = barre oblique = pipe = alt gr + 6)

if((C) && (D)){...}
=> si C est FAUX et que D est FAUX =>FAUX
=> si C est FAUX et que D est VRAIS =>VRAIS
=> si C est VRAIS et que D est FAUX =>VRAIS
=> si C est VRAIS et que D est VRAIS =>VRAIS


// l'operateur "!" sinifie le contraire de ...
var utlilisateurLog = true;
if(!utlilisateurLog){
    // si l'utilisateur n'est pas loggé
}
//ce qui revient à :
if(utlilisateurLog == false){
    // si l'utimisateur n'est pas loggé
}
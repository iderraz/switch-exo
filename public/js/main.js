//- # Exo 1 Switch
//    - ## Stockez dans une variable, via un prompt, un jour de la semaine.

//    - ## À l'aide d'un switch, affichez ce que vous avez planifié de faire ce jour-ci. 
//        - ### Ex:  On est lundi. Tu as cours  à MolenGeek et tu as sport en soirée.

/*
let jour = prompt("Quel jour sommes-nous ?");

switch (jour) {
    case "lundi":
        alert("nous sommes Lundi");
        break;
    case "Mardi":
        alert("nous sommes Mardi");
        break;
    case "Mercredi":
        alert("nous sommes Mercredi");
        break;
    case "Jeudi":
        alert("nous sommes Jeudi");
        break;
    case "Vendredi":
        alert("nous sommes Vendredi");
        break;
    default:
        alert("c'est le week-end !");
}
*/



//- # Exo 2 Switch
//    - ## Déclarer une variable qui prendra comme valeur un prompt qui retourne un type de météo (pluie, soleil, neige, nuages, orages)

//    - ## À l'aide d'un switch, affichez une réaction appropriée au temps
//        - ### Ex: Il pleut. Je prend un parapluie

/*
let meteo = prompt("Quel temps fait-il ?");

switch (meteo){
    case "Pluie":
        alert("Il pleut, prend donc un parapluie");
        break;
    case "Soleil":
        alert("Il fait beau, met donc de la crème solaire");
        break;
    case "Neige":
        alert("Met donc une bonne veste");
        break;
    case "Nuage":
        alert("met une écharpe");
        break;
    case "orage":
        alert("Reste à la maison, il y a un orage")
        break;
    default:
        alert("fais toi un chocolat chaud");
}
*/

//- # Exo 3 Switch
//    - ### Déclarez trois variables que l'utilisateur remplira : nbr1 / operateur(+-/*) / nbr2;

//    - ###  Faite switch qui en fonction de l'opérateur donné, effectuera le calcul avec cet opérateur et afficher le résultat.

//        - ### Ex:nbr1 = 1 | operateur = "+" | nbr2 = 3  => affichera 4


let nbr1 = parseInt(prompt("entrez un nombre "));
let operateur = prompt("+-/*");
let nbr2 = parseInt(prompt("entrez un nombre "));

switch (operateur) {
    case( "-"):
        alert( `${nbr1} - ${nbr2} = ${nbr1-nbr2}` );
        break;
    case( "+"):
        alert( `${nbr1} + ${nbr2} = ${nbr1+nbr2}` );
        break;
    case( "*"):
        alert( `${nbr1} * ${nbr2} = ${nbr1*nbr2}` );
        break;
    case( "/"):
        alert( `${nbr1} / ${nbr2} = ${nbr1/nbr2}` );
        break;
    default:
        alert("pas de calcul");

}




// Inversion d'une chaîne de caractères à l'aide
// d'un tableau
// Objectif :
// ● Comprendre les méthodes d'array en JavaScript:
// ● Décomposer un problème en étapes: Découper la résolution du
// problème en plusieurs sous-problèmes plus simples.
// ● Optimiser le code: Écrire du code concis et efficace.
// Énoncé :
// Écrire une fonction JavaScript qui prend en entrée une chaîne de
// caractères et qui retourne cette chaîne inversée. Tu devras utiliser
// les méthodes d'array pour effectuer cette opération.
// Étapes :
// 1. Création d'une fonction: Définir une fonction qui prend en
// paramètre la chaîne de caractères à inverser.
// 2. Retour du résultat: Retourner la nouvelle chaîne inversée.

function reverseStr(str) {
  const newStr = str.split("").reverse();
  return newStr.join("");
}

console.log(reverseStr("salut"));

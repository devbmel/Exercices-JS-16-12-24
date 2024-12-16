// Exercice : Chaînage de callbacks
// Niveau : Avancé
// Créez une fonction premiereEtape qui simule une opération asynchrone avec
// setTimeout (délai de 2 secondes) et accepte un callback pour indiquer que
// l'étape est terminée.
// Ajoutez une fonction deuxiemeEtape, également asynchrone, qui suit la même
// logique.
// Enchaînez les appels des deux étapes, et à la fin affichez "Toutes les
// étapes sont terminées!".
// Bonus 1 :
// Ajoutez une troisième étape troisiemeEtape et intégrez-la au chaînage. À la fin
// de la troisième étape, affichez un message avec une variable passée dans chaque
// étape (exemple : un compteur incrémenté).
// Bonus 2 :
// Gérez des erreurs dans les étapes avec un deuxième argument onError. Si une
// étape échoue (par exemple, 50% de chances), affichez une erreur dans la console
// et arrêtez le processus.

function premiereEtape(callback) {
  setTimeout(() => {
    callback();
    console.log("Premiere etape terminée");
  }, 2000);
}

function deuxiemeEtape(callback) {
  setTimeout(() => {
    callback();
    console.log("Deuxième etape terminée");
  }, 2000);
}

premiereEtape(() => {
  deuxiemeEtape(() => {
    console.log("Toutes les étapes finies");
  });
});

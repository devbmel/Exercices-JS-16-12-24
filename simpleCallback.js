// Exercice : Comprendre les callbacks avec un exemple contextuel
// Niveau Facile
// Objectif :
// Créer une fonction qui affiche un message personnalisé pour différents
// utilisateurs grâce aux callbacks.
// Étape principale :
// Créez une fonction saluerUtilisateur qui accepte deux paramètres :
// un nom (chaîne de caractères).
// une fonction callback qui définit la façon dont l'utilisateur sera
// salué.
// Implémentez deux callbacks :
// salutationFormelle : affiche un message comme "Bonjour, M. ou Mme
// [nom]".
// salutationInformelle : affiche un message comme "Salut [nom] !".
// Appelez saluerUtilisateur deux fois : une fois avec chaque type de
// salutation.
// Bonus 1 : Ajouter des heures contextuelles
// Ajoutez une nouvelle fonction callback salutationHeure qui s'adapte à l'heure de
// la journée :
// "Bonjour" si l'heure est entre 6h et 12h.
// "Bon après-midi" entre 12h et 18h.
// "Bonsoir" après 18h.
// Bonus 2 : Ajouter un contexte de langue
// Ajoutez une fonction callback salutationMultilingue qui affiche le message en
// français ou en anglais selon un argument langue passé dans la fonction
// saluerUtilisateu

function saluerUtilisateur(nom, callback) {
  callback(nom);
}

function saluerUser(nom, callback, langage = "fr") {
  callback(nom, langage);
}

function salutationFormelle(name) {
  console.log(`Bonjour, M. ou Mme ${name}`);
}

function salutationInformelle(surname) {
  console.log(`Salut ${surname} !`);
}

function salutationHeure(name) {
  const heure = new Date().getHours();
  let salutation = "Bonjour";

  if (heure >= 6 && heure < 12) {
    salutation = "Bonjour";
  } else if (heure >= 12 && heure < 18) {
    salutation = "Bon après midi";
  } else {
    salutation = "Bonsoir";
  }

  console.log(`${salutation}, ${name}`);
}

function salutationMultilingue(nom, langue = "fr") {
  let salutation = {
    fr: "Bonjour",
    en: "Hello",
  };
  console.log(`${salutation[langue]}, ${nom}`);
}

saluerUtilisateur("Dupont", salutationFormelle);
saluerUtilisateur("Toto", salutationInformelle);
saluerUtilisateur("Toto", salutationHeure);
saluerUtilisateur("Titi", (nom) => {
  salutationMultilingue(nom, "en");
});
saluerUser("Dupont", salutationMultilingue, "en");

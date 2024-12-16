// 1. Simuler une API de données utilisateur
// Objectif : Simuler des appels à une API qui retourne des données utilisateur de
// manière asynchrone. Vous devrez enchaîner plusieurs requêtes avec des promesses.
// Consigne :
// Créez une fonction getUserData(userId) qui retourne une promesse.
// Simulez un délai de 1 à 2 secondes avec setTimeout.
// Faites en sorte que la promesse résolve avec un objet utilisateur
// contenant id, nom, et email.
// Créez une fonction getUserPosts(userId) qui retourne une promesse.
// Simulez un délai similaire et renvoyez une liste d'articles associés à
// l'utilisateur.
// Enchaînez les deux fonctions pour afficher les données utilisateur suivies
// des articles dans la console.
// Étape bonus :
// Ajoutez un mécanisme d'erreur : si userId est invalide, rejetez la promesse
// avec un message d'erreur approprié.
// Gérez cette erreur avec .catch().

function getUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userData = [
        {
          id: 1,
          nom: "toto",
          email: "toto@tata.fr",
        },
        {
          id: 2,
          nom: "titi",
          email: "titi@tata.fr",
        },
      ];
      const dataResult = userData.filter((user) => user.id === userId);

      if (dataResult.length === 0) {
        reject("Il n'a pas d'user avec l'id correspondant");
      }
      resolve(dataResult);
    }, 2000);
  });
}

function getUserPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userPost = [
        {
          id: 1,
          article: "Lorem ipsum",
        },
        {
          id: 2,
          article: "blablalbla",
        },
      ];
      const postResult = userPost.filter((post) => post.id === userId);

      if (postResult.length === 0) {
        reject("Il n'a pas de post avec l'id correspondant");
      }
      resolve(postResult);
    });
  }, 2000);
}

async function fetchUserInfos(userId) {
  try {
    const userData = await getUserData(userId);
    const userPost = await getUserPosts(userId);

    console.log("Données user:", userData);
    console.log("Post user:", userPost);
  } catch (error) {
    console.error(error);
  }
}

fetchUserInfos(3);
fetchUserInfos(2);

// pour faire une requête AJAX avec un navigateur, on utilise l'objet fetch
// fetch est une fonction asynchrone qui renvoie une promesse représentant la réponse à la requête
const response = await fetch('https://swapi.dev/api/people/2');
// pour récupérer le contenu de la réponse, on utilise la méthode json() de l'objet réponse, si jamais le contenu attendu est du JSON
const content = await response.json();
// on peut ensuite utiliser le contenu de la réponse
console.log(content);
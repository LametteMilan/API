const persoIdSelect = document.querySelector('[name=id]');
const contentContainer = document.querySelector('#content');

const baseURL = 'https://swapi.dev/api/';

document.addEventListener('input', async (event) => {
  console.log('ajax');
  if(persoIdSelect.value){
    const url = baseURL + 'people/' + persoIdSelect.value;
    // On va récupérer des données fourni par la réponse à la requête ajax, dans ces données on a un flux qui nous permet de lire le contenu de la réponse, petit à petit
    const response = await fetch(url);
    // nous ici on va récupérer tout d'un coup, pour cela on a accès dans la réponse a une méthode qui permet de tout récupérer d'un coup sous forme de JSON
    // Cette méthode est également asynchrone car cela peut prendre du temps pour lire l'ensemnle du contenu
    const data = await response.json();
    console.log(data);
    const textContent = `<p>Le personnage ${data.name}</p>
<p>est né le ${data.birth_year}</p>
<p>et pèse ${data.mass}kg</p>
    `;
    contentContainer.innerHTML = textContent;

  }

});
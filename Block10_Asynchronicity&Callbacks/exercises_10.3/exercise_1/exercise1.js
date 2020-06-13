const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => fetchJoke(data.joke));


const fetchJoke = (objData) => {
  const jokeContainer = document.querySelector('#jokeContainer');
  jokeContainer.innerHTML = objData;
};

window.onload = () => fetchJoke();



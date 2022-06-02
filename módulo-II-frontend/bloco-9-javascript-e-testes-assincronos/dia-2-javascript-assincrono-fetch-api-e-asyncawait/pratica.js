// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  return fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => console.log(data));
};
const piada = document.getElementById('jokeContainer');
piada.innerText = fetchJoke();
window.onload = () => fetchJoke();
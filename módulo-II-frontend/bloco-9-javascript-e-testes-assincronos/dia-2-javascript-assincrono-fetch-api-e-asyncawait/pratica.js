// const fetch = require('node-fetch');

// EXERCÍCIO 1
// const API_URL = 'https://icanhazdadjoke.com/';

// const fetchJoke = () => {
//   const myObject = {
//     method: 'GET',
//     headers: { 'Accept': 'application/json' }
//   };

//   return fetch(API_URL, myObject)
//   .then(response => response.json())
//   .then(data => console.log(data));
// };
// const piada = document.getElementById('jokeContainer');
// piada.innerText = fetchJoke();
// window.onload = () => fetchJoke();

// EXERCÍCIO 2
const API_URL = `https://api.coincap.io/v2/assets`;

const fetchCriptos = async () => {
  const response = await fetch(API_URL);
  const list = await response.json();
  const coinFlag = [];
  list.data.forEach((coin) => {
    const message = `${coin.name} (${coin.symbol}): ${coin.priceUsd.split('.')[0]},${coin.priceUsd.split('.')[1].charAt(0) + coin.priceUsd.split('.')[1].charAt(1)}`;
    coinFlag.push(message);
  });
  const smallerList = coinFlag.slice(0, 10);
  const coinsList = document.getElementById('coin-list');
  coinsList.innerText = 'Coins list';
  smallerList.forEach((coin) => {
    const li = document.createElement('li');
    li.className = 'coin';
    li.innerText = coin;
    coinsList.appendChild(li);
  });
}

window.onload = () => fetchCriptos();


// const fetch = require('node-fetch');

// const fetchJoke = async () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   const result = await fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data.value))
//     .catch((error) => console.log(`Algo deu errado :( \n${error}`));
  //  console.log(result);
// }

// fetchJoke();

function lastDigit(as){
  if (as.length === 0) {
    return 1;
  }
  let number = as.reverse().reduce((pot, n) => pot = Math.pow(pot, n));
  console.log(number);
  let n = number.toString();
  return n.charAt(n.length - 1);
}
console.log(lastDigit([3, 4, 5]));
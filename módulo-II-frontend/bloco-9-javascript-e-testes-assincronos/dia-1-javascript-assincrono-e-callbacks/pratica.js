const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {  // A
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = { // B
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = { //C
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

// console.log(planetDistanceFromSun(mars));
// setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000);
// setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000);

//  EXERCÍCIO 1
//  A => B => C

//  EXERCÍCIO 2
//  A => C => B

//  EXERCÍCIO 3
// const getPlanet = () => {
//   const mars = {
//     name: "Mars",
//     distanceFromSun: {
//       value: 227900000,
//       measurementUnit: "kilometers",
//     },
//   };
//   setTimeout(() => console.log("Returned planet: ", mars), 4000);
// };

// getPlanet();

//  EXERCÍCIO 4, 5 E 6
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

const sendMarsTemperature = (callback, funcError) => {
  const succed = Math.random() >= 0.4;
  if (succed) {
    setTimeout(() => callback(getMarsTemperature()), messageDelay);
  } else {
    const erro = 'Robot is busy';
    funcError(erro);
  }
}
// sendMarsTemperature(temperatureInFahrenheit, handleError);
// sendMarsTemperature(greet, handleError);

//  EXERCÍCIO 8
const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grass',
    ability: 'Razor Leaf',
  },
  {
    name: 'Charmander',
    type: 'Fire',
    ability: 'Ember',
  },
  {
    name: 'Squirtle',
    type: 'Water',
    ability: 'Water Gun',
  },
];

function getPokemonDetails(filter, callback) {
  setTimeout(() => {
    if (pokemons.find(filter) === undefined) {
      return callback(new Error('Não temos esse pokémon para você :('), null);
    }
    const pokemon = pokemons.find(filter);

    const { name, type, ability } = pokemon;

    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

    callback(null, messageFromProfOak);
  }, 2);
}

getPokemonDetails((element) => element.name === 'Squirtle', (erro, message) => {
  (erro) ? console.log(erro) : console.log(message);
});

module.exports = {
  getPokemonDetails,
};
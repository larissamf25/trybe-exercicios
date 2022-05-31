// SPREAD OPERATOR
const specialFruit = ['banana', 'mamão', 'laranja'];
const additionalItens = ['chocolate', 'pipoca'];
const fruitSalad = (fruit, additional) => [...specialFruit, ...additionalItens];
//  console.log(fruitSalad(specialFruit, additionalItens));

// REST OPERATOR
function quantosParams(...args) {
  console.log('parâmetros:', args);
  return `Você passou ${args.length} parâmetros para a função.`;
}
// console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
// console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

//  OBJECT DESTRUCTURING
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const userComplete = {...user, ...jobInfos};
const {name, age, nationality, profession, squad, squadInitials} = userComplete;
//  console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squad} (${squadInitials})!`);

//  ARRAY DESTRUCTURING
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
[saudacao, funcao] = saudacoes;
//  funcao(saudacao);s

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';
const array = [bebida, comida, animal];
const [food, pet, drink] = array;
//  console.log(food, pet, drink); // arroz gato água

let numerosPares = [1, 3, 5, 6, 8, 10, 12];
[one, three, five, six, eight, ten, twelve] = numerosPares;
numerosPares = [six, eight, ten, twelve];
//  console.log(numerosPares);

//  DEFAULT DESTRUCTURING
const getNationality = ({ firstName, nationality}) => {
  let {country = 'Brazilian'} = person;
  let result;
  (firstName === 'João') ? result = `${firstName} is ${country}` : result = result = `${firstName} is ${nationality}`;
  return result;
};
const person = {
  firstName: 'João',
  lastName: 'Jr II',
};
const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};
// console.log(getNationality(otherPerson));
// console.log(getNationality(person));

//  OBJECT PROPERTY SHORTHAND
const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});
//  console.log(getPosition(-19.8157, -43.9542));

//  DEAFAULT PARAMETERS
const multiply = (number, value = 1) => number * value;
console.log(multiply(8));

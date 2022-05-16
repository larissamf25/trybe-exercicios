//  EXERCÍCIO FOREACH
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

//  emailListInData.forEach(showEmailList);

//  EXERCÍCIO FIND
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (element) => element % 3 === 0 && element % 5 === 0;

//  console.log(numbers.find(findDivisibleBy3And5));

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = names.find((name) => name.length === 5);

//  console.log(findNameWithFiveLetters);

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  const search = musicas.find((music) => music['id'] === id);
  return search;
}
//  console.log(findMusic('31031686'));

// EXERCÍCIO SOME E EVERY
const person = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((word) => word == name);

//  console.log(hasName(person, 'Ana'));

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => arr.every((person) => person['age'] >= minimumAge);

//  console.log(verifyAges(people, 18));

//  EXERCÍCIO SORT
people.sort((a,b) => (a.name > b.name) ? 1 : -1);
people.sort((a,b) => (a.name < b.name) ? 1 : -1);
people.sort((a,b) => a.age - b.age);
people.sort((a,b) => b.age - a.age);
console.log(people);
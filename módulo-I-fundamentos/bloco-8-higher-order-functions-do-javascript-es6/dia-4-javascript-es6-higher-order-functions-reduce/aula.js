//  EXERCÍCIOS DA AULA DO DIA 18/05/2022

const numbers = [2, 3, 4, 5, 6, 7, 8];

const sum = (array) => array.reduce((acc, number) => acc + number, 0);

//  console.log(sum(numbers));

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const formPhrase = () => epic.reduce((phrase, word, index, array) => {
  phrase += ` ${word}`,''
  console.log(`Índice: ${index} | Valor atual: ${word} | Acumulador: ${phrase}`);
  return phrase;
});

//  console.log(formPhrase());

const players = [
  { fullName: 'Adriano Imperador', email: 'didico@futebol.br' },
  { fullName: 'Ronaldinho Gaúcho', email: 'bruxo@futebol.br' },
  { fullName: 'Ronaldo Fenômeno', email: 'cortedocascao@futebol.br' },
  { fullName: 'Marta Vieira da Silva', email: 'rainhamarta@futebol.br' },
];

const data = () => {
  let result = {};
  const people = players.map((person) => result[person.fullName] = person.email);
  return result;
}
//  console.log(data());
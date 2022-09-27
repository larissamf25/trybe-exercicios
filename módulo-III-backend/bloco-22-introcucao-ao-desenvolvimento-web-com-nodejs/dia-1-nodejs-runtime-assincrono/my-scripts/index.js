const bmi = require('./bmi');
const readline = require('readline-sync');
const fs = require('fs').promises;
const path = require('path');

function bmiInterativo() {
  const weight = readline.questionFloat('What is your weight ');
  const height = readline.questionFloat('What is your height  ');
  bmi(weight, height);
}

async function readSimpsons(id) {
  const data = await fs.readFile(path.resolve(__dirname, './simpsons.json'));
  const simpsons = JSON.parse(data);
  const char = simpsons.find((character) => character.id == id);
  if (!char) throw new Error('id not found!');
  return char.name;  
  // simpsons.map((character) => console.log(`${character.id} - ${character.name}`))
}

async function requestSimpsons() {
  const id = readline.questionInt('What is the ID  ');
  try {
    const character = await readSimpsons(id);
    console.log(character);
  } catch(error) {
    console.error(error);
  }
}

async function deleteSimpsons() {
  const data = await fs.readFile(path.resolve(__dirname, './simpsons.json'));
  const simpsons = JSON.parse(data);
  await fs.writeFile(path.resolve(__dirname, './simpsons.json'), JSON.stringify(simpsons.filter((character) => character.id !== 6 && character.id !== 10)));
}

async function newSimpsons() {
  const data = await fs.readFile(path.resolve(__dirname, './simpsons.json'));
  const simpsons = JSON.parse(data);
  await fs.writeFile(path.resolve(__dirname, './simpsonsFamily.json'), JSON.stringify(simpsons.filter((character) => character.id <= 4)));
}

async function addSimpsons() {
  const data = await fs.readFile(path.resolve(__dirname, './simpsonsFamily.json'));
  const simpsons = JSON.parse(data);
  await fs.writeFile(path.resolve(__dirname, './simpsonsFamily.json'), JSON.stringify([...simpsons, { id: simpsons.length + 1, name: 'Nelson Muntz' }]));
}

async function updateSimpsons() {
  const data = await fs.readFile(path.resolve(__dirname, './simpsonsFamily.json'));
  const simpsons = JSON.parse(data);
  const oldId = simpsons.find((char) => char.name === 'Nelson Muntz').id;
  const newSimpsons = simpsons.filter((char) => char.name !== 'Nelson Muntz');
  await fs.writeFile(path.resolve(__dirname, './simpsonsFamily.json'), JSON.stringify([...newSimpsons, { id: oldId, name: 'Maggie Simpson' }]));
}

// bmiInterativo();
// readSimpsons();
// requestSimpsons();
deleteSimpsons();
// newSimpsons();
// addSimpsons();
// updateSimpsons();

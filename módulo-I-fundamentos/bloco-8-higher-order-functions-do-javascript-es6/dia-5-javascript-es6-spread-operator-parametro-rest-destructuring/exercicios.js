// EXERCÍCIO 1
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  //  console.log(rectangleArea(...rectangle));
});

// EXERCÍCIO 2
const sum = (...array) => array.reduce((acc, element) => acc + element);
// console.log(sum(1,2,3,4));
// console.log(sum(2,3,4));

// EXERCÍCIO 3
const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};
const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};
const personLikes = (person) => {
  const {name, age, likes} = person;
  return `${name} is ${age} years old and likes ${likes.join(', ')}.`;
}
// console.log(personLikes(alex));
// console.log(personLikes(gunnar));

// EXERCÍCIO 4
const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];
const filterPeople = (people) => people.filter((person) => {
    const {bornIn, nationality} = person;
    let result;
    (bornIn <= 2000 && nationality === 'Australian') ? result = true : result = false;
    return result;
});
//  console.log(filterPeople(people));

// EXERCÍCIO 5
const myList = [1, 2, 3];
const swap = ([first, second, third]) => [first, third];
//  console.log(swap(myList)); 

// EXERCÍCIO 6
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];
const toObject = (car) => {
  const [name, marca, ano] = car;
  return ({nome, marca, ano});
}
//  console.log(toObject(palio));

// EXERCÍCIO 7
const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];
const shipLength = (ship) => {
  const {name, length, measurementUnit} = ship;
  return `${name} is ${length} ${measurementUnit} long`;
}
// console.log(shipLength(ships[0]));
// console.log(shipLength(ships[1]));
// console.log(shipLength(ships[2]));

// EXERCÍCIO 8
const greet = (person = 'user', greeting = 'Hi') => `${greeting} ${person}`;
// console.log(greet('John'));
// console.log(greet('John', 'Good morning'));
// console.log(greet('Isabela', 'Oi'));

// EXERCÍCIO 9
const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const {spring, summer, autumn, winter} = yearSeasons;
// console.log(`Os meses do ano são: ${[...spring, ...summer, ...autumn, ...winter]}.`);

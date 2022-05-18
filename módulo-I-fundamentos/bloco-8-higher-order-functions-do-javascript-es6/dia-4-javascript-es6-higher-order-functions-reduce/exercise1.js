// EXERCÍCIO 1
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(matrix) {
  let index = 0;
  const newArray = matrix.reduce((acc, array) => {
    array.forEach((element) => {
      acc[index] = element;
      index += 1;
    });
    return acc;
  }, []);
  return newArray;
}
//  console.log(flatten(arrays));

// EXERCÍCIO 2
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];
function reduceNames(books) {
  const authors = books.reduce((string, book, index) => (books.length === index) ? string += `${book.author.name}, ` : string += `${book.author.name}.`, '');
  return authors;
}
//  console.log(reduceNames(books));

// EXERCÍCIO 3
function averageAge(books) {
  const sumAge = books.reduce((sum, book) => sum + (book.releaseYear - book.author.birthYear),0);
  return sumAge / books.length;
}
//  console.log(averageAge(books));

// EXERCÍCIO 4
function longestNamedBook(books) {
  const biggestBook = books.reduce((bigger, book) => (bigger.name.length > book.name.length) ? bigger : book);
  return biggestBook;
}
//  console.log(longestNamedBook(books));

// EXERCÍCIO 5
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(names) {
  const letterA = names.reduce((count, name) => {
    for (let index = 0; index < name.length; index += 1) {
      if (name[index] === 'a' || name[index] === 'A') {
        count += 1;
      }
    }
    return count;
  }, 0);
  return letterA;
}
//  console.log(containsA(names));

// EXERCÍCIO 6
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(students, grades) {
  const expected = students.map((student, index) => ({name: student, average: (grades[index].reduce((sum, grade) => grade + sum))/grades[index].length}));
  return expected;
}
// console.log(studentAverage(students, grades));

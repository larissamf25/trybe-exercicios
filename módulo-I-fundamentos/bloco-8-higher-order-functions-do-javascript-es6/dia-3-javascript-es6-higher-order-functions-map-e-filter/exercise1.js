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

// EXERCÍCIO 1
const formatedBookNames = () => books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`)
//  console.log(formatedBookNames());

// EXERCÍCIO 2
const nameAndAge = () => books.map((book) => ({age: book.releaseYear - book.author.birthYear, author: book.author.name})).sort((a,b) => a.age - b.age);
//  console.log(nameAndAge());

// EXERCÍCIO 3
const fantasyOrScienceFiction = () => books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');
//  console.log(fantasyOrScienceFiction());

// EXERCÍCIO 4
const oldBooksOrdered = () => books.filter((book) => 2022 - book.releaseYear > 60).sort((a,b) => a.releaseYear - b.releaseYear);
//  console.log(oldBooksOrdered());

// EXERCÍCIO 5
const fantasyOrScienceFictionAuthors = () => books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica').map((book) => book.author.name).sort();
//  console.log(fantasyOrScienceFictionAuthors());

// EXERCÍCIO 6
const oldBooks = () => books.filter((book) => 2022 - book.releaseYear > 60).map((book) => book.name);
//  console.log(oldBooks());

// EXERCÍCIO 7
const authorWith3DotsOnName = () => books.find((book) => {
  let count = 0;
  for (let index = 0; index < book.author.name.length; index += 1) {
    if (book.author.name[index] === '.') {
      count += 1;
    }
  }
  if (count === 3) {
    return true;
  }
}).name;
console.log(authorWith3DotsOnName());
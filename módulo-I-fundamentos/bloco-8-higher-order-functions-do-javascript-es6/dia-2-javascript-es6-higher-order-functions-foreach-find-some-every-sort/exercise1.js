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
      birthYear: 1921,
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

const authorBornIn1947 = () => books.find((book) => book.author.birthYear === 1947).author.name;
// console.log(authorBornIn1947());

function smallerName() {
  let nameBook = books[0].name;
  books.forEach((book) => {
    if (book['name'].length < nameBook.length) {
      nameBook = book.name;
    }
  })
  return nameBook;
}
// console.log(smallerName());

const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function getNamedBook() {
  let book = books.find((book) => book.name.length = 26);
  let order = Object.keys(book).sort();
  let bookSorted = {};
  order.forEach((key) => {
    bookSorted[key] = book[key];
  });
  return bookSorted;
}
//  console.log(getNamedBook());

const sortRelease = () => books.sort((a,b) => b.releaseYear - a.releaseYear);

//  console.log(sortRelease());

const everyBornXX = () => books.every((book) => book.author.birthYear > 1900 && book.author.birthYear <= 2000);
//  console.log(everyBornXX());

const someRelease80 = () => books.some((book) => book.releaseYear >= 1980 && book.releaseYear < 1990);
//  console.log(someRelease80());

const sameBorn = () => {
  let control = true;
  let yearsBorn = [];
  books.forEach((book) => {
    if(yearsBorn.includes(book.author.birthYear)) {
      control = false;
    }
    yearsBorn.push(book.author.birthYear);
  });
  return control;
}
console.log(sameBorn());
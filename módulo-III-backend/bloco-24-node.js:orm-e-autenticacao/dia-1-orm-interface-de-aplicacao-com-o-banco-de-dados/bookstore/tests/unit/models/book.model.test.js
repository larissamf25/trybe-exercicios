const { sequelize, dataTypes, checkModelName, checkPropertyExists } = require('sequelize-test-helpers');
const { expect } = require('chai');
const BookModel = require('../../../src/models/book.model');

describe('O model de Book', () => {
  const Book = BookModel(sequelize, dataTypes);
  const book = new Book();
  describe('possui o nome "Book"', () => {
    checkModelName(Book)('Book');
  });
  describe('possui as propriedades title, author, pageQuantity, createdAt, updatedAt, publisher', () => {
    ['title', 'author', 'pageQuantity', 'createdAt', 'updatedAt', 'publisher'].forEach(checkPropertyExists(book));
  });
});

/*
describe('O model de Book', function () {
  it('possui a propriedade "title"', function () {
    const book = new Book();
    expect(book).to.have.property('title');
  });

  it('possui a propriedade "author"', function () {
    const book = new Book();
    expect(book).to.have.property('author');
  });

  it('possui a propriedade "pageQuantity"', function () {
    const book = new Book();
    expect(book).to.have.property('pageQuantity');
  });

  it('possui a propriedade "publisher"', function () {
    const book = new Book();
    expect(book).to.have.property('publisher');
  });
});
*/
const BookModel = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    id: DataTypes.NUMBER,
    genre: DataTypes.STRING,
  });

  return Book;
};

module.exports = BookModel;
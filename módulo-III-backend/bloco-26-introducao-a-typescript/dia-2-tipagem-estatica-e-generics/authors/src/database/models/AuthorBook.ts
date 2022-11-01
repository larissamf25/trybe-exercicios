module.exports = (sequelize, _DataTypes) => {
  const AuthorBook = sequelize.define('AuthorBook',
    {},
    {
      timestamps: false,
      underscored: true, 
      tableName: 'authors_books'
    },
  );
  AuthorBook.associate = (models) => {
    models.Book.belongsToMany(models.Author, {
      as: 'users',
      through: AuthorBook,
      foreignKey: 'bookId',
      otherKey: 'authorId',
    });
    models.Author.belongsToMany(models.Book, {
      as: 'authors',
      through: AuthorBook,
      foreignKey: 'authorId',
      otherKey: 'bookId',
    });
  };
  return AuthorBook;
};
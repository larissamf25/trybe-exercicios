const AuthorModel = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    id: DataTypes.NUMBER,
    name: DataTypes.STRING,
  });

  return Author;
};

module.exports = AuthorModel;
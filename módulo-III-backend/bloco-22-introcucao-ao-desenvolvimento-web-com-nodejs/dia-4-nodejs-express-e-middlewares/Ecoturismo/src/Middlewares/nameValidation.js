const nameValidation = (req, res, next) => {
  const { name } = req.body;
  if(!name) req.status(400).json({ message: "O campo name é obrigatório" });
  if(name.length < 4) req.status(400).json({ message: "O campo name deve ter pelo menos 4 caracteres" });
  else next();
}

module.exports = nameValidation;
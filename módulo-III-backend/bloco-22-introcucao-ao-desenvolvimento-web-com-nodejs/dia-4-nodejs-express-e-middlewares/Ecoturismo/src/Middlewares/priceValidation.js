const priceValidation = (req, res, next) => {
  const { price } = req.body;
  if(!price) req.status(400).json({ message: "O campo price é obrigatório" });
  else if(typeof price !== 'number' || Number(price) < 0) req.status(400).json({ message: "O campo price deve ser um número maior ou igual a zero" });
  else next();
}

module.exports = priceValidation;
const descriptionValidation = (req, res, next) => {
  const { description } = req.body;
  if(!description) res.status(400).json({ message: "O campo desccription é obrigatório" });
  
  const { createdAt, rating, difficulty } = description;

  if(!createdAt) res.status(400).json({ message: "O campo createdAt é obrigatório" });
  if(!/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i.test(createdAt)) res.status(400).json({ message: "O campo createdAt deve ter o formato \'dd/mm/aaaa\'" });

  if(!rating) res.status(400).json({ message: "O campo rating é obrigatório" });
  if(!Number.isInteger(rating) || rating < 1 || rating > 5) res.status(400).json({ message: "O campo rating deve ser um número inteiro entre 1 e 5" });

  if(!difficulty) res.status(400).json({ message: "O campo difficulty é obrigatório" });
  if(!['Fácil', 'Médio', 'Difícil'].includes(difficulty)) res.status(400).json({ message: "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'" });

  else next();
}

module.exports = descriptionValidation;
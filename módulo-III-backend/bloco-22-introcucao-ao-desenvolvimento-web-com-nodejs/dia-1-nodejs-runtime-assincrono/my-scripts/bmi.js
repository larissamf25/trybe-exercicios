function bmi(weight = 60, height = 1.7) {
  const imc = weight / (height ^ 2);
  let message;
  console.log(imc);

  if (imc < 18.5) message = 'Abaixo do peso (magreza)';
  else if (imc >= 18.5 && imc < 25) message ='Peso normal';
  else if (imc >= 25 && imc < 30) message ='Acima do peso (sobrepeso)';
  else if (imc >= 30 && imc < 35) message ='Obesidade grau I';
  else if (imc >= 35 && imc < 40) message ='Obesidade grau II';
  else message = 'Obesidade graus III e IV';
  
  console.log(message);
  return imc;
}

module.exports = bmi;
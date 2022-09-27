const readlile = require('readline-sync');

function handleNumbers() {
  const a = readlile.questionFloat('Informe a: ')
  if (!Number(a)) {
    console.log('Informe apenas números');
    return;
  }
  const b = readlile.questionFloat('Informe b: ')
  if (!Number(b)) {
    console.log('Informe apenas números');
    return;
  }
  const c = readlile.questionFloat('Informe c: ')
  if (!Number(c)) {
    console.log('Informe apenas números');
    return;
  }
  const result = (a + b) * c;
  if(result < 50) throw new Error('Valor muito baixo!');
  return result;
}

console.log(handleNumbers());
const readfile = require('readline-sync');
const fibonacci = require('./fibonacci');

function runFibonacci() {
  const amount = readfile.questionInt('Qual o tamanho da sequência desejada ');
  if (amount <= 0) {
    console.log('Enter a number greater then \'0\'!');
    return;
  }
  const response = fibonacci(amount);
  console.log(response);
}

runFibonacci();

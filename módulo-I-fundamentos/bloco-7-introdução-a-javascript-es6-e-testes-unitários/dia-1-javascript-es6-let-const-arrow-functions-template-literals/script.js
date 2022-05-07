//  PARTE 1
//  EXERCÍCIO 1

function testingScope (escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log (ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
}

testingScope(true);

// const testingScope = escopo => ((escopo === true) ? 'Não devo ser utilizada fora meu escopo (if)' + ' ótimo, fui utilizada no escopo !' : 'Não devo ser utilizada fora meu escopo (else)');
// console.log(testingScope(false));

//  EXERCÍCIO 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

console.log(`Os números ${oddsAndEvens.sort(function(a, b){return a-b})} se encontram ordenados de foram crescente!`);

//  PARTE 2
//  EXERCÍCIO 1
// function fatorial(number) {
//   let result = 1;
//   for (index = number; index > 0; index -= 1) {
//     result *= index;
//   }
//   return result;
// };

const fatorial = (number) => (number == 1 || number == 0) ? 1 : number*fatorial(number - 1);
console.log(fatorial(3));

 EXERCÍCIO 2
function longestWord(phrase) {
  const words = phrase.split(" ");
  let maior = '';
  for (let index = 0; index < words.length; index += 1) {
    if(words[index].length > maior.length) {
      maior = words[index];
    }
  }
  return maior;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

//  EXERCÍCIO 3
// const button = document.getElementById('button');
// const result = document.getElementById('result');
// let count = 0;
// result.innerText = count;
// button.addEventListener('click', function() {
//   count += 1;
//   result.innerText = count;
// })
const count = document.getElementById('button').addEventListener('click', () => document.getElementById('result').innerText = (parseInt(document.getElementById('result').innerText) + 1));

//  EXERCÍCIO 4
const trocaX = (frase, palavra) => frase.replace('x',palavra);

console.log(trocaX('Trybe x aqui!', 'Bebeto'));

var skills = ['HTML', 'CSS', 'JS', 'React',  'Python'];

const func2 = (parametro2) => `${parametro2}
Minhas cinco principais habilidades são:
${skills.sort()}
#goTrybe`;
console.log(func2(trocaX('Bebeto')));



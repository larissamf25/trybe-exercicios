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

//  EXERCÍCIO 2
// longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

//  EXERCÍCIO 3

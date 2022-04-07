let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//EXERCÍCIO #1
for (index = 0; index < numbers.length; index +=1){
  //console.log(numbers[index]);
}

//EXERCÍCIO #2
let resultado = 0;
for (index = 0; index < numbers.length; index +=1){
  resultado = resultado + numbers[index];
}
console.log(resultado);

//EXERCÍCIO #3
let media = resultado/numbers.length;
console.log("média = " + media);

//EXERCÍCIO #4
if (media > 20){
  console.log('valor maior que 20');
} else {
  console.log ("valor menor ou igual a 20");
}

//EXERCÍCIO #5
let maior = 0;
for (index = 0; index < numbers.length; index +=1){
  if (numbers[index] > maior){
    maior = numbers[index];
  }
}
console.log ("o maior valor do array é " + maior);

//EXERCÍCIO #6
let impar = 0;
for (index = 0; index < numbers.length; index +=1){
  if (numbers[index]%2 === 1){
    impar+=1;
  }
}
if (impar === 0){
  console.log("nenhum valor ímpar encontrado");
} else {
  console.log ("Existem " + impar + " números ímpares");
}

//EXERCÍCIO #7
let menor = maior;
for (index = 0; index < numbers.length; index +=1){
  if (numbers[index] < menor){
    menor = numbers[index];
  }
}
console.log ("o menor valor do array é "+ menor);

//EXERCÍCIOS #8 E #9
let novoArray = [];
let divisao = [];
for (indice = 0; indice < 25; indice += 1){
  novoArray[indice] = indice + 1;
  //console.log(novoArray[indice]);
  divisao[indice] = novoArray[indice] / 2;
  //console.log(divisao[indice]);
}

// BÔNUS
// for (let index = 1; index < array.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (array[index] < array[secondIndex]) {
//       let position = array[index];
//       array[index] = array[secondIndex];
//       array[secondIndex] = position;
//     }
//   }
// }

// for (index = 1; index < numbers.length; index +=1){
//   for (index2 = 0; index2 < numbers.length -1; index2 +=1){
//     if (numbers[index2] > numbers[index2 +1]){
//       let troca = numbers[index2];
//       numbers[index2] = numbers[index2 +1];
//       numbers[index2 +1] = troca;
//     }
//   }
// }
// console.log("array em ordem crescente:")
// console.log(numbers);

// for (index = 1; index < numbers.length; index +=1){
//   for (index2 = 0; index2 < numbers.length -1; index2 +=1){
//     if (numbers[index2] < numbers[index2 +1]){
//       let troca = numbers[index2];
//       numbers[index2] = numbers[index2 +1];
//       numbers[index2 +1] = troca;
//     }
//   }
// }
// console.log("array em ordem decrescente:")
// console.log(numbers);

let multiplicacao = [];
for(index = 0; index < numbers.length; index +=1){
  if (index !== numbers.length -1){
    multiplicacao[index] = numbers[index] * numbers[index+1];
  } else {
    multiplicacao[index] = 2 * numbers[index];
  } 
}
console.log(multiplicacao);
// EXERCÍCIO #1
function palindromo(palavra){
  let tamanho;
  if (palavra.length % 2 === 0){
      tamanho = palavra.length/2;
  } else{
    tamanho = (palavra.length - 1)/2;
  }
  let iguais = 0;
  for(let index = 0; index < tamanho; index += 1){
    if (palavra[index] === palavra[palavra.length-1-index]){
      iguais += 1;
    }
  }
  if(iguais === tamanho){
    console.log("A palavra é um palíndromo");
    return true;
  } else{
    console.log("A palavra não é um palíndromo");
    return false;
  }
}

palindromo('Larissa');

// EXERCÍCIOS #2 E #3
function tamanhoIndice(array){
  let indiceMaior = array[0];
  let indiceMenor = array[0];
  for(let index = 0; index < array.length; index +=1){
    if (array[index] > indiceMaior){
      indiceMaior = index;
    }
    if (array[index] < indiceMenor){
      indiceMenor = index;
    }
  }
  return {indiceMaior,indiceMenor};
}
console.log(tamanhoIndice([2, 4, 6, 7, 10, 0, -3]));

// EXERCÍCIO #4
function maisCaracteres(array){
  tamanho = 0;
  let maiorPalavra;
  for (let index = 0; index < array.length; index += 1){
    if (array[index].length > tamanho){
      maiorPalavra = array[index];
      tamanho = array[index].length;
    }
  }
  return maiorPalavra;
}

console.log(maisCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// EXERCÍCIO #5
function repeticao(array){
  let maisRepetido = 0;
  let contador = [0,0,0,0,0,0,0];
  for(let index = 0; index < array.length; index += 1){
    for(let index2 = 0; index2 < array.length; index2 +=1){
      if (array[index] === array[index2]){
        contador[index] += 1;
      }
    }
    if (contador[index] > maisRepetido){
      maisRepetido = array[index];
    }
  }
  return maisRepetido;
}
console.log(repeticao([2, 3, 2, 5, 8, 2, 3]));

// EXERCÍCIO #6
function somatorio(number){
  let soma = 0;
  for (let index = number; index > 0; index -= 1){
    soma += index;
  }
  return soma;
}
console.log(somatorio(5));

// EXERCÍCIO #7
function contida(word,ending){
  let resposta = true;
  for(let index = 0; index < ending.length; index +=1){
    if (word[word.length -1 -index] !== ending[ending.length -1 - index]){
      resposta = false;
      break;
    }
  }
  return resposta;
}
console.log(contida('joaofernando','fernan'));
console.log("---BÔNUS---");

// BÔNUS #1
function romano(numeroRomano){
  let numeroAlgebrico = 0;
  let conversao = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  for(let index = 0; index < numeroRomano.length -1; index +=1){
    let letraAtual = numeroRomano[index];
    let numeroAtual = conversao[letraAtual];
    let letraSeguinte = numeroRomano[index +1];
    let numeroSeguinte = conversao[letraSeguinte];
    if (numeroAtual < numeroSeguinte){
      numeroAlgebrico -= numeroAtual;
      
    } else {
      numeroAlgebrico += numeroAtual;
    }
  }
  let size = numeroRomano.length - 1;
  numeroAlgebrico += conversao[numeroRomano[size]];
  return numeroAlgebrico;
}
console.log(romano("DM"));

// BÔNUS #2
let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
function arrayOfNumbers(vector){
  let pares = [];
  for (let index = 0; index < vector.length ; index += 1){
    for (let index2 = 0; index2 < vector[index].length; index2 += 1){
      if (vector[index][index2] % 2 === 0){
        pares.push(vector[index][index2]);
      }
    }
  }
  return pares;
}
console.log(arrayOfNumbers(vector));

// BÔNUS #3
const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];
let frutas = [];
let contador = [];
for (let index = 0; index <= basket.length; index += 1){
  let iguais = 0;
  for(let index2 = 0; index2 <= frutas.length; index2 += 1){
    if (basket[index] === frutas[index2]){
      iguais += 1;
    }
  }
  if (iguais === 0){
    frutas[frutas.length] = basket[index];
    contador[frutas.length-1] = 0;
    for (let index2 = 0; index2 <= basket.length; index2 += 1){
      if (basket[index] === basket[index2]){
        contador[frutas.length-1] += 1;
      }
    }
  }
}
let lista = {};
for(let index = 0; index < frutas.length; index += 1){
  lista[frutas[index]] = contador[index];
}
console.log(lista);

// BÔNUS #4
let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};
console.log("O morador do bloco 2 de nome " + moradores.blocoDois["1"]["nome"] + " " +  moradores.blocoDois["1"]["sobrenome"] + " mora no " + moradores.blocoDois["1"]["andar"] + "° andar, apartamento " + moradores.blocoDois["1"]["apartamento"]);

// BÔNUS #5
for (let index in moradores.blocoUm){
  console.log(moradores.blocoUm[index]["nome"]);
}
for (let index in moradores.blocoDois){
  console.log(moradores.blocoDois[index]['nome']);
}
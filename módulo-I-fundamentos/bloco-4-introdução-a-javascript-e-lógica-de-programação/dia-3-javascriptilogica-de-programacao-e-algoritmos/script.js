//EXERCÍCIO #1
let number = 10;
let fatorial = 1;
for (index = number; index >= 1; index-= 1){
  fatorial = fatorial*index;
}
console.log("O fatorial de " + number + " é " + fatorial);

//EXERCÍCIO #2
let word = 'tryber';
let invert = "";
for (index = word.length -1; index >= 0; index -= 1){
  invert = invert + word[index];
}
console.log("A inversão da palavra " + word + " é " + invert);

//EXERCÍCIO #3
let array = ['java', 'javascript', 'python', 'html', 'css'];
let countWord = [];
let smaller = array[0];
let bigger = array[0];
for (index = 1; index < array.length; index += 1){
  countWord.push(array[index].length);
  if (array[index].length < smaller.length){
    smaller = array[index];
  }
  if (array[index].length > bigger.length){
    bigger = array[index];
  }
}
console.log("A menor palavra é " + smaller + " e a maior é " + bigger);

//EXERCÍCIO #4
let beginning = 0;
let end = 50;
let primos = [];

for (index = 0; index <= end; index += 1){
  let divisores = 0;
  for (index2 = 1; index2 <= index; index2 += 1){
    if (index % index2 === 0){
      divisores += 1;
    }
  }
  if (divisores === 2){
    primos.push(index);
  }
}
console.log("O último número primo do intervalo é " + primos[primos.length - 1]);

//BÔNUS - QUADRADO
number = 7;
let element = "*";
for (index= 0; index < number; index += 1){
  let linha = "";
  for (let coluna = 0; coluna < number; coluna +=1){
    linha += element;
  }
  //console.log(linha);
}

//BÔNUS - TRIÂNGULO ESQUERDA
for (index= 0; index < number; index += 1){
  let linha = "";
  for (let coluna = 1; coluna <= index +1 ; coluna +=1){
    linha += element;
  }
  //console.log(linha);
}

//BÔNUS - TRIÂNGULO DIREITA
let espaco = " ";
for (index= 1; index <= number; index += 1){
  let linha = "";
  for (let coluna = 1; coluna <= number - index; coluna += 1){
    linha += espaco;
  }
  for (let coluna = 1; coluna <= index; coluna += 1){
    linha += element;
  }
  //console.log(linha);
}

//BÔNUS - PIRÂMIDE
if(number%2 === 1){
  let linhas = (number + 1)/2;
  for (index= 1; index <= linhas; index += 1){
    let linha = "";
    for (let coluna = 1; coluna <= linhas - index; coluna += 1){
      linha += espaco;
    }
    for (let coluna = 1; coluna <= 1 + 2*(index -1 ); coluna += 1){
      linha += element;
    }
    for (let coluna = 1; coluna <= linhas - index; coluna += 1){
      linha += espaco;
    }
    //console.log(linha);
  }
} else {
  let linhas = number/2;
  for (index= 1; index <= linhas; index += 1){
    let linha = "";
    for (let coluna = 1; coluna <= linhas - index; coluna += 1){
      linha += espaco;
    }
    for (let coluna = 1; coluna <= 2 + 2*(index -1 ); coluna += 1){
      linha += element;
    }
    for (let coluna = 1; coluna <= linhas - index; coluna += 1){
      linha += espaco;
    }
    //console.log(linha);
  }
}

//BÔNUS - PIRÂMIDE VAZADA
let linhas = (number + 1)/2;
for (index= 1; index <= linhas -1; index += 1){
  let linha = "";
  for (let coluna = 1; coluna <= linhas - index; coluna += 1){
    linha += espaco;
  }
  linha += element;
  if (index !== 1){
    for (let coluna = 1; coluna <= 1 + 2 * (index - 2); coluna += 1){
      linha += espaco;
    }
    linha += element;
  }
  for (let coluna = 1; coluna <= linhas - index; coluna += 1){
    linha += espaco;
  }
  //console.log(linha);
}
let linha = "";
for (index = 0; index < number; index += 1){
  linha += element;
}
//console.log(linha);

//BÔNUS #6
let numeroPrimo = 22;
let divisor = 0;
for (let index = 1; index <= numeroPrimo; index +=1){
  if (numeroPrimo % index === 0){
    divisor += 1;
  }
}
if(divisor === 2){
  console.log("O número " + numeroPrimo + " é primo");
} else{
  console.log("O número " + numeroPrimo + " não é primo");
}
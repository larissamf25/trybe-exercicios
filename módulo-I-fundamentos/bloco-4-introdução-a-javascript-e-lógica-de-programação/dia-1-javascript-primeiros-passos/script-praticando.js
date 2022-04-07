let a = 6;
let b = 2;
let c = 5;

// QUESTÃO 1
let operacao = "%";
switch (operacao){
  case "+":
    console.log(a+b);
    break;
  case "-":
    console.log(a-b);
    break;
  case "*":
    console.log(a*b);
    break;
  case "/":
    console.log(a/b);
    break;
  case "%":
    console.log(a%b);
    break;
}

// QUESTÃO 2
if (a > b){
  console.log(a);
} else if (a < b){
  console.log(b);
} else{
  console.log("a=b");
}

// QUESTÃO 3
if (a > b && a > c){
  console.log(a);
} else if (a === b && a > c){
  console.log("a=b");
} else if (a === c && a > b){
  console.log("a=c");
} else if (b > c){
  console.log(b);
} else if (b === c){
  console.log("b=c");
} else {
  console.log(c);
}

// QUESTÃO 4
const inteiro = 0;
if (inteiro > 0){
  console.log("positivo");
} else if (inteiro < 0){
  console.log("negativo");
} else {
  console.log("zero");
}

// QUESTÃO 5
let anguloA = 190;
let anguloB = -80;
let anguloC = 70;
if (anguloA < 0 || anguloB < 0 || anguloC < 0){
  console.log("erro");
} else {
  console.log(anguloA + anguloB + anguloC === 180);
}

// QUESTÃO 6
let entrada = "rei";
let peca = entrada.toLowerCase();
switch (peca){
  case "torre":
    console.log("Anda várias casas na vertical ou na horizontal");
    break;
  case "cavalo":
    console.log("Anda em L");
    break;
  case "bispo":
    console.log("Anda várias casas na diagonal");
    break;
  case "rei":
    console.log("Anda uma casa em qualquer direção");
    break;
  case "rainha":
    console.log("É uma junção da torre e do bispo");
    break;
  case "peao":
    console.log("Anda uma casa para frente");
    break;
  default:
    console.log("erro");
}
// QUESTÃO 7
let nota = -10;
if (nota >= 90 && nota <= 100){
  console.log("A");
} else if (nota > 80){
  console.log("B");
} else if( nota > 70){
  console.log("C");
} else if(nota > 60){
  console.log("D");
} else if(nota> 50){
  console.log("E");
} else if(nota< 50 && nota >= 0){
  console.log("F");
} else{
  console.log("nota inválida");
}
// QUESTÃO 8
console.log(a % 2 === 0 || b % 2 === 0 || c %2 === 0);

// QUESTÃO 9
console.log(a % 2 === 1 || b % 2 === 1 || c %2 === 1);

// QUESTÃO 10
const custo = 5;
const venda = 12;
if (custo < 0 || venda < 0){
  console.log("valor inválido");
} else{
  console.log(1000*(venda-1.2*custo));
}
// QUESTÃO 11
let bruto = 5000;
let base;
let liquido;
if (bruto <= 1556.94){
  base = bruto*0.92;
} else if (bruto <= 2594.92){
  base = bruto*0.91;
} else if (bruto <= 5189.92){
  base = bruto*0.89;
} else {
  base= bruto - 570.88;
}
if (base > 1903.99 && base<= 2826.65){
  liquido = base - base*0.075 + 142.8;
} else if (base > 2826.65 && base <= 3751.05){
  liquido = base - base*0.15 + 354.80;
} else if (base > 3751.05 && base <= 4664.68){
  liquido = base - base*0.225 + 636.13;
} else if (base > 4664.68){
  liquido = base- base*0.275 + 869.36;
}
console.log(liquido);
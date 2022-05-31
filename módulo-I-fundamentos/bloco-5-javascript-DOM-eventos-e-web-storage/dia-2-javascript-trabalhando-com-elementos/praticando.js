// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let corpo = document.getElementsByTagName('body');
let exercicioDeHoje = document.createElement('h1');
exercicioDeHoje.innerText = 'Exercício 5.2 - JavaScript DOM';
corpo.appendChild(exercicioDeHoje);

// Adicione a tag main com a classe main-content como filho da tag body ;
let principal = document.createElement('main');
principal.className =  'mainContent';
body.appendChild(principal);
 
// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let secao = document.createElement('section');
secao.className = 'centerContent';
mainContent.appendChild(secao);

// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let texto = document.createElement('p');
texto.innerText = "Texto do parágrafo";
centerContent.appendChild(texto);

// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let sectionLeft = document.createElement('section');
sectionLeft.className = 'leftContent';
mainContent.appendChild(sectionLeft);

// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let sectionRight = document.createElement('section');
sectionRight.className = 'rightContent';
mainContent.appendChild(sectionRight);

// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
let imagem = document.createElement('img');
imagem.src = "https://picsum.photos/200 e classe small-image"
leftContent.appendChild(imagem);

// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
let lista = document.createElement('ul');
lista.tagName = 'listaDesordenada';
rightContent.appendChild(lista);
let numeros = ["um", 'dois', 'três', 'quatro', 'cinco', 'sexta', 'sete', 'oito', 'nove', 'dez'];
for (let index = 0; index < 9; index += 1){
  let item = document.createElement('li');
  let numero = numeros[index];
  item.innerText = numero;
  lista.appendChild(item);
}
  
// Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
let texto3 = document.createElement('h3');
texto3.innerText = 'centerContent';
mainContent.appendChild(texto3);

// Adicione a classe title na tag h1 criada;

// Adicione a classe description nas 3 tags h3 criadas;

// Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;

// Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;

// Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;

// Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
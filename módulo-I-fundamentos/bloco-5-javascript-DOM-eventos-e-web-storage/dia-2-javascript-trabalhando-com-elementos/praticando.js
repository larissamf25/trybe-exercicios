// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
const body = document.getElementById('body');
let title = document.createElement('h1');
title.innerText = "Exercício 5.2 - JavaScript DOM";
body.appendChild(title);

// Adicione a tag main com a classe main-content como filho da tag body ;
 let main = document.createElement('main');
 main.className = "main-content";
 body.appendChild(main);

// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
 let section1 = document.createElement('section');
 section1.className = "center-content";
 main.appendChild(section1);

// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let p = document.createElement('p');
p.innerText = "texto da tag p";
section1.appendChild(p);

// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let section2 = document.createElement('section');
section2.className = "left-content";
main.appendChild(section2);

// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let section3 = document.createElement('section');
section3.className = "right-content";
main.appendChild(section3);

// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
let image = document.createElement('img');
image.src = "https://picsum.photos/200 ";
image.className = 'small-image';
section2.appendChild(image);

// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
let numbers = ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez"];
const newList = document.createElement('ul');
for (let index = 0; index < 10; index += 1) {
  let item = document.createElement('li');
  item.innerText = numbers[index];
  newList.appendChild(item);
}
section3.appendChild(newList);

// Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
for (let index = 0; index < 3; index += 1) {
  let item = document.createElement('h3');
  item.className = "description";
  main.appendChild(item);
}
// Adicione a classe title na tag h1 criada;
title.className = "title";

// Adicione a classe description nas 3 tags h3 criadas;

// Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
main.removeChild(section2);

// Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;
section3.style.marginRight = "auto";
// Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
main.style.backgroundColor = "green";

// Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
let elementList = newList.children;
newList.removeChild(elementList[8]);
newList.removeChild(elementList[8]);
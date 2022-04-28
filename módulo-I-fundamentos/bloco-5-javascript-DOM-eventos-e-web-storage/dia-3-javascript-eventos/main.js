const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const container = document.getElementsByClassName('container')[0];
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
// console.log(container);
// console.log(lista);

// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
let selected = firstLi;
container.addEventListener("click", function(e) {
  for (let index = 0; index < 3; index += 1) {
    container.children[index].classList.remove('tech');
  }
  e.target.className += " tech";
  selected = e.target;
})

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';
input.addEventListener('keypress', function(e) {
  selected.innerText = input.value;
})

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
myWebpage.addEventListener('dblclick', function(e) {
  window.open('www.google.com', '_blank');
})

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;
myWebpage.addEventListener('mouseover', function(e) {
  e.target.style.color = "red";
})

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
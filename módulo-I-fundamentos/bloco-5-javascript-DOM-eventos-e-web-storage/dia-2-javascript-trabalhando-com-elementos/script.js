console.log(document.getElementById('elementoOndeVoceEsta'));
let colorPai = document.getElementById('elementoOndeVoceEsta').parentNode;
colorPai.style['background-color'] = 'red';
document.getElementById('primeiroFilhoDoFilho').innerText = 'texto do primeiro filho do filho';
console.log(document.getElementById('pai').firstElementChild);
console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);
console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);
console.log(document.getElementById('pai').lastElementChild.previousElementSibling);

// Crie um irmão para elementoOndeVoceEsta .
// Crie um filho para elementoOndeVoceEsta .
// Crie um filho para primeiroFilhoDoFilho .
// A partir desse filho criado, acesse terceiroFilho .
// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho

let me = document.getElementById('elementoOndeVoceEsta');
let irmao = document.createElement('section');
irmao.id = 'irmaoOndeVoceEsta';
me.parentNode.appendChild(irmao);
// console.log(document.getElementById('pai').querySelectorAll('section'));

let filho = document.createElement('section');
filho.id = 'terceiroDeOndeVoceEsta';
me.appendChild(filho);
// console.log(document.getElementById('elementoOndeVoceEsta').lastElementChild);

let filhoDoFilho = document.createElement('section');
filhoDoFilho.id = "filhoDoPrimeiroFilhoDoFilho";
me.firstElementChild.appendChild(filhoDoFilho);
// console.log(document.getElementById('primeiroFilhoDoFilho').firstElementChild);

let novoEu = document.getElementById('filhoDoPrimeiroFilhoDoFilho');
let referencia = novoEu.parentNode.parentNode.nextElementSibling;
// console.log(document.getElementById('referencia'));

pai.removeChild(me.previousSibling);
console.log(document.getElementById('pai'));

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
let referencial = document.getElementById('elementoOndeVoceEsta').parentNode;
let irmao = document.createElement('section');
irmao.className= 'irmaoOndeVoceEsta';
referencial.appendChild('testando o irmão');
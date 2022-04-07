// EXERCÍCIO 1
let menu1 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu1[1];

console.log(menuServices);

// EXERCÍCIO 2
let menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu2.indexOf('Portfólio');

console.log(indexOfPortfolio);

// EXERCÍCIO 3
let menu3 = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu3.push('Contato');
console.log(menu3);

// EXERCÍCIO SOBRE FOR
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (let index = 0; index < groceryList.length; index+=1){
  console.log(groceryList[index]);
}

// EXERCÍCIO SOBRE FOR/OF
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let elements of names){
  console.log(elements);
}
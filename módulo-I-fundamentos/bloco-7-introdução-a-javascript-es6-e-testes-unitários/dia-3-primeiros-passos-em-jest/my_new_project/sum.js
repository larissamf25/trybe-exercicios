function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
}
function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if(arr[index] !== item) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}
function myFizzBuzz(num) {
  if(num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  }
  if(num % 3 === 0) {
    return 'fizz';
  }
  if(num % 5 === 0) {
    return 'buzz';
  }
  if(typeof num !== 'number') {
    return false;
  }
  return num;
}
function encode(letter) {
  switch (letter) {
    case 'a': return '1';
    case 'e': return '2';
    case 'i': return '3';
    case 'o': return '4';
    case 'u': return '5';
    default: return letter;
  }
}

function decode(letter) {
  switch (letter) {
    case '1': return 'a';
    case '2': return 'e';
    case '3': return 'i';
    case '4': return 'o';
    case '5': return 'u';
    default: return letter;
  }
}

function techList(list, string) {
  let obj = [];
  if (list.length === 0) {
    return 'Vazio!';
  }
  list = list.sort();
  for (let index = 0; index < list.length; index += 1) {
    let newTech = {
      tech: list[index],
      name: string,
    };
    obj.push(newTech);
  }
  return obj;
}

function hydrate(drinks) {
  let agua = 0;
  let justNumbers = drinks.replace(/\D/g, '');
  for (let index = 0; index < justNumbers.length; index += 1) {
    agua += Number(justNumbers[index]);
  }
  if (agua === 1) {
    return `${agua} copo de água`;
  }
  return`${agua} copos de água`;
}

// BÔNUS
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

const searchEmployee = (id, detail) => {
  if (! Object.keys(professionalBoard[0]).includes(detail)) {
    return 'Informação indisponível';
  }
  for (let index = 0; index < Object.keys(professionalBoard).length; index += 1 ) {
    if (professionalBoard[index].id === id) {
      return professionalBoard[index][detail];
    }
  }
  return 'ID não identificado';
};

module.exports = {
  sum,
  myRemove,
  myFizzBuzz,
  encode,
  decode,
  techList,
  hydrate,
  searchEmployee,
}

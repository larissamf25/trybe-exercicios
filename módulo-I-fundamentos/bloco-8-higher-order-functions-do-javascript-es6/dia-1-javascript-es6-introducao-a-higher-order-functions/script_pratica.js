//  EXERCÍCIO 1
const newEmployees = (user) => {
  const login = user.toLowerCase().replace(' ', '_');
  const employees = {
    id1: `${login}@trybe.com`,
  }
  return employees;
};

const data = (user) => {
  let infos = {};
  infos[user] = Object.values(newEmployees(user))[0];
  console.log(infos);
};
//  data('Larissa Menezes de Freitas');

//  EXERCÍCIO 2
const sort = (bet, check) => {
  let number = parseInt(Math.random() * 5);
  let message;
  (check(bet, number) === false) ? message = "Tente novamente" : message = "Parabéns você ganhou";
  return message;
}
//  console.log(sort(4, (bet, number) => (bet === number) ? true : false ));

//  EXERCÍCIO 3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const gradeTest = (right, student, check) => {
  let grade = 0;
  for (let index = 0; index < student.length; index += 1) {
   grade += check(right[index], student[index]);
  }
  return grade;
}
// console.log(gradeTest(RIGHT_ANSWERS, STUDENT_ANSWERS, (right, student) => {
//   if (right === student) {
//     return 1;
//   } else if (student === 'N.A') {
//     return 0;
//   } else {
//     return -0.5;
//   }
// }));

//  BÔNUS - Game Actions Simulator
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => parseInt(Math.random()*(dragon['strength'] - 15)) + 15;
const warriorDamage = () => parseInt(Math.random()*(warrior['strength'] - warrior['weaponDmg'])) + warrior['weaponDmg'];
const mageDamage = () => {
  let obj = {
    dano: parseInt(Math.random()*(2*mage['intelligence'] - mage['intelligence'])) + mage['intelligence'],
    mana: 15,
  }
  if (mage['mana'] < 15) {
    obj.mana = 0;
    return "Não possui mana suficiente";
  } else {
    mage['mana'] -= obj.mana;
  }
  return obj;
}
const warriorTurn = (damage) => {
  dragon.healthPoints -= damage;
  warrior.damage = damage;
}
const mageTurn = (damage) => {
  dragon.healthPoints -= damage.dano;
  mage.damage = damage.dano;
  mage.mana = damage.mana;
}
const dragonTurn = (damage) => {
  warrior.healthPoints -= damage;
  mage.damage = damage;
  dragon.damage = damage;
}

const gameActions = {
  0: warriorTurn(warriorDamage()),
  1: mageTurn(mageDamage()),
  2: dragonTurn(dragonDamage()),
  3: console.log(battleMembers),
};
Object.values(gameActions)[3];
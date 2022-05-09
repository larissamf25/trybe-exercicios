const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

// console.log(customer1);

let newKey = 'lastName';
const lastName = 'Ferreira';
customer1[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer1.firstName} ${customer1.lastName}`;
customer1[newKey] = fullName;
// console.log(customer1);

const customer2 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};

// console.log(customer2);
customer2['lastName'] = 'Silva';
// console.log(customer2);

const trainee = (object, key, value) => {
  let newKey = key;
  object[newKey] = value;
}
const objeto = {
  firstName: 'Roberto',
  job: 'Teacher',
};
trainee(objeto, 'age', 22)
console.log(objeto);

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const skills = (student) => {
  let keys = Object.keys(student);
  for (let index in keys) {
    console.log(`${keys[index]}, Nível: ${student[keys[index]]}`);
  }
}
skills(student1);
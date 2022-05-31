const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addShift(lesson, key, value) {
  lesson[key] = value;
}
addShift(lesson2, 'turno', 'noite');

function listKeys(lesson) {
  console.log(Object.keys(lesson));
}
listKeys(lesson1);

function listValues(lesson) {
  console.log(Object.values(lesson));
}
listValues(lesson1);

function size(lesson) {
  console.log(Object.keys(lesson).length);
}
size(lesson3);

const allLessons = Object.assign({},{lesson1},{lesson2},{lesson3});
function totalStudents(lesson) {
  let total = 0;
  for (let index = 0; index < Object.keys(lesson).length; index += 1) {
    total += Object.entries(lesson)[index][1].numeroEstudantes;
  }
  return total;
}
totalStudents(allLessons);

function getValue(lesson,key) {
  return Object.values(lesson)[key];
}
getValue(lesson3,0);

function existPair(lesson, key, value) {
  let valid = 0;
  for(let index = 0; index < Object.keys(lesson).length; index += 1) {
    if(Object.keys(lesson)[index] === key && Object.values(lesson)[index] === value) {
      valid = 1;
    }
  }
  if (valid === 0) {
    return false;
  } else {
    return true;
  }
}
existPair(lesson2, 'professor', 'Carlos');

//  BÔNUS
function countMath(lesson) {
  let total = 0;
  for (let index = 0; index < Object.keys(lesson).length; index += 1) {
    if(Object.entries(lesson)[index][1].materia === 'Matemática') {
      total += Object.entries(lesson)[index][1].numeroEstudantes;
    }
  }
  return total;
}
countMath(allLessons);

function report(lesson, teacher) {
  let classes = [];
  let students = 0;
  for (let index = 0; index < Object.keys(lesson).length; index += 1) {
    if(Object.entries(lesson)[index][1].professor === teacher) {
      classes.push(Object.entries(lesson)[index][1].materia);
      students += Object.entries(lesson)[index][1].numeroEstudantes;
    }
  }
  return Object.assign({professor: teacher},{aulas: classes}, {estudantes: students});
}
report(allLessons,'Maria Clara');

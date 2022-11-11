class Subject {

  constructor(private name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setName(newName: string) {
    if (newName.length >= 3) this.name = newName;
    else throw new Error('O nome deve conter no mínimo 3 caracteres.');
  }
}

abstract class Person {
  name: string;
  birthDate: Date;

  constructor(name: string, date: Date) {
    this.name = name;
    this.birthDate = date;
  };

  getName() {
    return this.name;
  }

  getBirth() {
    return this.birthDate;
  }

  setName(newName: string) {
    if (newName.length >= 3) this.name = newName;
    else console.log('Nome inválido');
  }

  setBirth(newDate: Date) {
    if (new Date().getTime() - newDate.getTime() <= 120 * 365.25 * 24 * 3600 * 1000) this.birthDate = newDate;
    else console.log('Data inválida');
  }
}

abstract class Employee extends Person{
  registration: string;
  salary: number;
  admissionDate: Date;

  constructor(name: string, date: Date) {
    super(name, date);
  }

  abstract generateRegistration(newRegistry: number): string;
}


// const maria = new Person('Maria da Consolação', new Date('1980/01/25'));
// const luiza = new Person('Luiza Andrade', new Date('2005/10/02'));

// console.log(maria);
// console.log(luiza);

interface Enrollable {
  enrollment: string;
  generateEnrollment(): string;
}

class Student extends Person implements Enrollable {
  enrollment: string;
  provas: [number, number, number, number];
  trabalhos: [number, number];

  constructor(nome: string, date: Date) {
    super(nome, date);
    this.enrollment = this.generateEnrollment();
  }

  sumGrades() {
    return this.provas.reduce((acc, nota) => acc + nota, 0);
  }

  sumAverageGrades() {
    return this.sumGrades() / 4;
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }

  addEvaluationResult(newEvaluation: number) {
    this.provas.push(newEvaluation);
  }
}
class Evaluation {
  score: number;
  teacher: Teacher;

  constructor(score: number, teacher: Teacher) {
    this.score = score;
    this.teacher = teacher;
  }

  getScore() {
    return this.score;
  }

  getTeacher() {
    return this.teacher;
  }

  setScore(newScore: number) {
    if (newScore < 0) throw new Error('A pontuação não pode ser negativa');
    else if(this.type === 'prova' && newScore > 25) throw new Error('A pontuação não pode passar de 25 para tipos prova');
    else if(this.type === 'trabalho' && newScore > 50) throw new Error('A pontuação não pode passar de 50 para tipos trabalho');
    else this.score = newScore;
  }
}

class Exam extends Evaluation{
  constructor(score: number, teacher: Teacher) {
    super(score, teacher);
  }
}

class Work extends Evaluation {
  constructor(score: number, teacher: Teacher) {
    super(score, teacher);
  }
}

class EvaluationResult {
  evaluation: Evaluation;
  score: number;

  constructor(evaluation: Evaluation, score: number) {
    this.evaluation = evaluation;
    this.score = score;
  }

  setScore(newScore: number) {
    if (newScore < 0) throw new Error('A pontuação não pode ser negativa');
    else if(newScore > this.evaluation.score) throw new Error('A pontuação não pode ser maior que a pontuação da avaliação')
    else this.score = newScore;
  }
}

class Teacher extends Employee implements Enrollable {
  registration: string;
  salary: number;
  admissionDate: Date;
  subject: Subject;
  enrollment: string;

  constructor(name: string, date: Date, salary: number, subject: Subject) {
    super(name, date);
    this.salary = salary;
    this.subject = subject;
    this.admissionDate = new Date();
    this.registration = this.generateRegistration(12345678910111213);
  }

  generateRegistration(newRegistry: number) {
    if ((newRegistry + '').length >= 16) {
      this.registration = newRegistry + '';
      return `Registro: ${this.registration}`;
    }
    return 'Insira um registro válido';
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }

  setAdmissionDate(value: Date) {
    if (value.getTime() > new Date().getTime()) throw new Error('A data de admissão não pode ser uma data no futuro.');

    this.admissionDate = value;
  }

  setSalary(newSalary: number) {
    if (newSalary > 0) this.salary = newSalary;
    else throw new Error('O salário deve ser positivo');
  }
}
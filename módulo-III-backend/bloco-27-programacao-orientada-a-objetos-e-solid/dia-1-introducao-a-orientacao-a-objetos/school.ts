interface Employee {
  registration: string;
  salary: number;
  admissionDate: Date;

  generateRegistration(newRegistry: number): string;
}

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

class Person {
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
    if (newDate.getTime() < new Date().getTime()) this.birthDate = newDate;
    else console.log('Data inválida');
  }
}

const maria = new Person('Maria da Consolação', new Date('1980/01/25'));
const luiza = new Person('Luiza Andrade', new Date('2005/10/02'));

console.log(maria);
console.log(luiza);

class Student extends Person{
  matricula: string;
  // nome: string;
  provas: [number, number, number, number];
  trabalhos: [number, number];

  constructor(nome: string, date: Date) {
    super(nome, date);
    this.matricula = this.generateMatricula();
  }

  soma() {
    return this.provas.reduce((acc, nota) => acc + nota, 0);
  }

  media() {
    return this.soma() / 4;
  }

  generateMatricula(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }
}

class Teacher extends Person implements Employee {
  registration: string;
  salary: number;
  admissionDate: Date;
  subject: Subject;

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

  setAdmissionDate(value: Date) {
    if (value.getTime() > new Date().getTime()) throw new Error('A data de admissão não pode ser uma data no futuro.');

    this.admissionDate = value;
  }

  setSalary(newSalary) {
    if (newSalary > 0) this.salary = newSalary;
    else throw new Error('O salário deve ser positivo');
  }
}

class Client {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}

class Product {
  nome: string;
  preco: number;

  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
  }
}

class Order {
  cliente: string;
  itens: number[];
  pagamento: string;
  desconto: number;

  constructor(cliente: string, itens: number[], pagamento: string, desconto: number) {
    this.cliente = cliente;
    this.itens = itens;
    this.pagamento = pagamento;
    this.desconto = desconto;
  }

  total() {
    return this.itens.reduce((acc, item) => acc + item, 0);
  }

  totalComDesconto() {
    return this.total() * (1 - this.desconto);
  }
}

class Data {
  dia: number;
  mes: number;
  ano: number;

  constructor(dia: number, mes: number, ano: number) {
    if (!Data.validateDate(dia, mes, ano)) {
      this.dia = 1;
      this.mes = 1;
      this.ano = 1990;
    } else {
      this.dia = dia;
      this.mes = mes;
      this.ano = ano;
    }
  }

  private static validateDate(day: number, month: number, year: number)
    : boolean {
    const dateStr = `${year}-${month}-${day}`;

    if (new Date(dateStr).getDate() !== day) return false;

    return true;
  }

  getMonthName() {
    switch(this.mes) {
      case 1: return 'Janeiro';
      case 2: return 'Fevereiro';
      case 3: return 'Março';
      case 4: return 'Abril';
      case 5: return 'Maio';
      case 6: return 'Junho';
      case 7: return 'Julho';
      case 8: return 'Agosto';
      case 9: return 'Setembro';
      case 10: return 'Outubro';
      case 11: return 'NOvembro';
      default: return 'Dezembro';
    }
  }

  isLeapYear() {
    return (this.ano % 4 === 0);
  }

  compare(newData: Data) {
    if (newData.dia === this.dia && newData.mes === this.mes && this.ano === newData.ano) return 0;
    if (this.ano > newData.ano || (this.ano === newData.ano && this.mes > newData.mes) || (newData.mes === this.mes && this.ano === newData.ano && this.dia > newData.dia)) return 1;
    return -1;
  }

  format(formato: string) {
    switch (formato) {
      case 'dd/mm/aaaa': return `${this.dia}/${this.mes}/${this.ano}`;
      case 'aaaa-mm-dd': return `${this.ano}/${this.mes}/${this.dia}`;
      case 'dd de M de aa': return `${this.dia} de ${this.getMonthName()} de ${this.ano}`;
      default: return `${this.dia}, ${this.getMonthName()} de ${this.ano}`;
    }
  }
}
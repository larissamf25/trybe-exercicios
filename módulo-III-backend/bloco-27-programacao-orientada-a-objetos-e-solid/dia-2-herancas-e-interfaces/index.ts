class Superclass {
  public isSuper: boolean;

  constructor(valor = true) {
    this.isSuper = valor;
  }

  sayHello() {
    console.log(this.isSuper ? 'Super!' : 'Sub!');
  }
}

class Subclass extends Superclass {
  constructor() {
    super(false);
  }

  sayHello2() {
    this.sayHello();
  }
}

function myFunc(object: Superclass) {
  object.sayHello();
}

const mae = new Superclass();
const filha = new Subclass();

// myFunc(mae);
// myFunc(filha);


interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class MyClass implements MyInterface{
  constructor(public myNumber: number) {

  }
  myFunc(myParam: number): string {
    return `O resultado é ${myParam + this.myNumber}`;
  }
}

const obj = new MyClass(23);
// console.log(obj.myFunc(27));

interface Contract {
  subject: string;
  clauses: string[];
  signatories: Person[];
  describe(): void;
}

class Person {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  get name() { return this._name; }
}

class NaturalPerson extends Person {
  private _cpf: string;
  constructor(name: string, cpf: string) {
    super(name);
    this._cpf = cpf;
  }
  get cpf() { return this._cpf; }
}

class LegalPerson extends Person {
  private _cnpj: string;
  constructor(name: string, cnpj: string) {
    super(name);
    this._cnpj = cnpj;
  }
}

class SalesContract implements Contract {
  private _signatories: Person[];
  private _clauses: string[];

  constructor() {
    this._signatories = [];
    this._clauses = [];
  }

  get signatories() { return [...this._signatories]; }
  get clauses() { return [...this._clauses]; }
  get subject() { return "Sales"; }

  sign(signatory: Person) { this._signatories.push(signatory); }
  addClause(clause: string) {
    if (this._signatories.length > 0) return;
    this._clauses.push(clause);
  }

  describe() {
    console.log('--------------------');
    console.log(`Contrato: ${this.subject}`);
    this.clauses.forEach((clause) => { console.log(`Cláusula: ${clause}`) });
    this.signatories.forEach((signatory) => { console.log(`Assinado por: ${signatory.name}`) });
    console.log('--------------------\n');
  }
}

const s1 = new SalesContract();
const pp1 = new NaturalPerson('Tony', '123456789');
const pp2 = new NaturalPerson('Lilly', '987654321');
const lp = new LegalPerson('International Sales SA', '23961237162378');

s1.describe();
s1.addClause('Foo');
s1.addClause('Bar');
s1.describe();
s1.sign(pp1);
s1.sign(pp2);
s1.describe();
s1.addClause('Baz');
s1.sign(lp);
s1.describe();
type Point = {
  x: number;
  y: number;
};


function printCoord(pt: Point) {
  console.log("O valor da cordenada x é: " + pt.x);
  console.log("O valor da coordenada y é: " + pt.y);
}

printCoord({ x: 100, y: 100 });

type Bird = {
  raca: string;
  cor: string;
  idade: number;
};

type Coords = {
  x: number;
  y: number;
}

type Address = {
  rua: string;
  numero: number;
  complemento: string;
}

type States = 'solido' | 'liquido' | 'gasoso';

type ID = number | string;

type vogais = 'a' | 'e' | 'i' | 'o' | 'u';

type SO = 'linux' | 'windows' | 'mac';

class Person {
  name: string;
  birthDate: Date; // o tipo Date está presente no TypeScript assim como no JavaScript
  age?: number; // o ? indica não obrigatoriedade
  constructor(name: string, birthDate: Date, age?: number) {
      this.name  = name;
      this.birthDate  = birthDate;
      this.age  = age;
  }

  speak(): void {
      console.log(`${this.name} está falando.`);
  }

  eat(): void {
      console.log(`${this.name} está comendo.`)
  }

  walk(): void {
      console.log(`${this.name} está andando.`)
  }
}

const person1 = new Person("Jane Doe", new Date("1986-01-01"));
const person2 = new Person("Jon Doe", new Date("1980-08-05"), 42);

console.log(person1);
person1.speak()

console.log(person2);
person2.walk();

class Dog {
  name: string;
  birthDate: Date; // o tipo Date está presente no TypeScript assim como no JavaScript
  age?: number; // o ? indica não obrigatoriedade
  constructor(name: string, birthDate: Date, age?: number) {
      this.name  = name;
      this.birthDate  = birthDate;
      this.age  = age;
  }

  speak(): void {
      console.log(`${this.name} está falando.`);
  }

  eat(): void {
      console.log(`${this.name} está comendo.`)
  }

  walk(): void {
      console.log(`${this.name} está andando.`)
  }
}

class House {
  address: string;
  age: number;
  size: number;

  constructor(address: string, age: number, size: number) {
    this.address = address;
    this.age = age;
    this.size = size;
  }

  statement(): void {
    console.log(`This house is located in ${this.address}, it has ${this.age} years and is ${this.size} m2`)
  }
}
const house1 = new House('Nunes Valente', 15, 150);
house1.statement();

class Flight {
  origin: string;
  destination: string;
  company: string;
  duration: number;

  constructor(origin: string, destination: string, company: string, duration: number) {
    this.origin = origin;
    this.destination = destination;
    this.company = company;
    this.duration = duration;
  }

  announcement(): void {
    console.log(`This flight from ${this.company}, departing from ${this.origin} to ${this.destination} will take ${this.duration} minutes`)
  }
}

const flight1 = new Flight('Fortaleza', 'Paris', 'AirFrance', 300);
flight1.announcement();

// INTERFACE
interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}

let employee: Employee = {
  firstName : "John",
  lastName: "Doe",
  fullName(): string {
      return this.firstName + " " + this.lastName; // usamos o "this" para acessar as propriedades da interface
  }
}

interface Teacher extends Employee {
  subject: string;
  sayHello(): string;
}

let teacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  subject: "Matemática",
  fullName(): string {
      return this.firstName + " " + this.lastName;
  },
  sayHello(): string {
      return `Olá, eu sou ${this.fullName()} e leciono ${this.subject}`;
  }
}

interface Auto {
  releaseYear: number;
  color: string;
  brand: string;
}

interface Aero extends Auto {
  weight: number;
}

// TYPE ASSERTION

type Address = {
  street: string,
  number: number | null,
}

type User = {
  name: string,
  email: string,
  password: string,
}

// função que converte de string para json
function stringToJson(str: string): unknown {
  const result = JSON.parse(str);
  return result;
}

// utilizando o "as" para converter de unknown para User
const user = stringToJson('{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}') as User

// Outra forma de usar o Assertion. A sintaxe é diferente mas tem o mesmo objetivo
const address = <Address> stringToJson('{"street":"Rua Tamarindo","number":1}')

user.name;
address.street;

const str: unknown = 'texto'; // simulando um valor supostamente desconhecido

str.split(''); // Dispara um erro por aplicar um split em um tipo desconhecido
(str as string).split('') // Corrigindo o erro acima usando o 'as'

const num: string = '2';

num as number // dispara um erro, pois não é possível usar Type Assertions com tipos incompatíveis
(num as unknown) as number // Corrigindo o erro acima convertendo primeiramente para unknown

// [...]
function stringToJson<T, U>(str: string, id: U ): T & { id: U } {
  // const result = JSON.parse(str);
  result.id = id;
  // return result;
}

const user = stringToJson<User, number>('{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}', Date.now());

const address = stringToJson<Address, string>('{"street":"Rua Tamarindo","number":1}', '#01')

user.id;
address.id;

function identity<T, U> (value: T, message: U) : T {
  console.log(message);
  return value
}

const returnNumber = identity<number, string>(100, "Olá");
const returnString = identity<string, string>("100", "Mundo");
const returnBoolean = identity<boolean, string>(true, "Olá, Mundo!");

function getArray<T>(items : T[]) : T[] {
  return new Array<T>().concat(items); // construindo um Array que só pode conter elementos do tipo T
}

const numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25);
numberArray.push("This is not a number"); // Isto vai gerar um erro de compilação

const stringArray = getArray<string>(["Cats", "Dogs", "Birds"]);
stringArray.push("Rabbits");
stringArray.push(30); // Isto vai gerar um erro de compilação
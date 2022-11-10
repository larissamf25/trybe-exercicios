class Animal {
  /* Obs: Usando essa sintaxe é necessário indicar explicitamente logo antes do nome do atributo se ele é public, private, protected ou readonly */
  constructor(public name: string, private birthDate: Date) { }

  getAge() {
    /*Para operar com datas, vamos operar somente com milissegundos. Uma data
    é o número de milissegundos desde o dia 01/01/1970 (era Unix).*/
    const timeDiff = Math.abs(
      Date.now() -
      new Date(this.birthDate).getTime()
    );

    /* Convertendo de volta para o número de anos inteiros, considerando anos bissextos */
    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }
}

class Mammal extends Animal {
  constructor(public name: string) {
    super(name, new Date()); // Usa-se na classe filha
  }

  walk() {
    console.log(`${this.name} está andando!`);
    /* console.log(`${this.birthDate} está andando!`); Como a variavel é privada, dá erro. Nesse caso, dever-se-ia usar o protected */
  }
}

const tiger = new Mammal(
  'Tigre',
  new Date(Date.parse('May 03, 2020')),
);

const main = (animal: Animal) => {
  console.log(animal.getAge());
}

main(tiger);
tiger.walk();

interface IAnimal {
  name: string;
  age: number;

  getBirthDate(): Date;
}

class Bird implements IAnimal {
  constructor(
    public name: string,
    private birthDate: Date) {}

  get age() {
    var timeDiff = Math.abs(Date.now() - new Date(this.birthDate).getTime());
    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }

  getBirthDate() { return this.birthDate; }

  fly() { console.log(`${this.name} está voando!`); }
}

const parrot = new Bird(
  'Papagaio',
  new Date(Date.parse('Aug 16, 2015')),
);

console.log(parrot.age);
parrot.fly();

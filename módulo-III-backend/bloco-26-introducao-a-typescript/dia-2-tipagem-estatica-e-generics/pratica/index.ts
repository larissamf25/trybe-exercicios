// EXERCÍCIO 1
class Car {
    brand: string;
    color: string;
    doors: number;

    constructor(brand: string, color: string, doors: number) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }

    honk():void {
        console.log(`Bi bi`);
    }
    turnOn():void {
        console.log(`Car on`);
    }
    turnOff():void {
        console.log(`Car off`);
    }
    speedUp():void {
        console.log('Speed is up!');
    }
    speedDown() {
        console.log('Speed is down!');
    }
    stop():void {
        console.log('Car has stopped');
    }
    turn(direction: string):void {
        console.log(`Car has turned ${direction}`);
    }
    openTheDoor(): void {
        console.log('Door is open');
    }
    closeTheDoor(): void { 
        console.log('Door is closed');
    }
}

// EXERCÍCIO 2
const gol = new Car('Hyundai', 'prata', 4);
gol.openTheDoor();
gol.closeTheDoor();
gol.turnOn();
gol.speedUp();
gol.speedDown();
gol.turn("esquerda");
gol.speedUp();
gol.speedDown();
gol.turn("direita");
gol.speedUp();
gol.speedDown();
gol.turn("direita");
gol.speedDown();
gol.stop();
gol.speedUp();
gol.speedDown();
gol.turn("direita");
gol.speedUp();
gol.speedDown();
gol.turn("esquerda");
gol.speedUp();
gol.speedDown();
gol.turn("direita");
gol.speedDown();
gol.stop();
gol.speedUp();

// EXERCÍCIO 3
interface Pizza {
    flavor: string;
    slices: 4 | 6 | 8;
}

const calabresa: Pizza = {
    flavor: 'calabresa',
    slices: 8
}
console.log(calabresa);

const marguerita: Pizza = {
    flavor: 'marguerita',
    slices: 6
}
console.log(marguerita);

const nutela: Pizza = {
    flavor: 'nutela',
    slices: 4
}
console.log(nutela);

// EXERCÍCIO 4
interface PizzaCommon extends Pizza {
    flavor: "Calabresa" | "Frango" | "Pepperoni";
}
const frango: PizzaCommon = {
    flavor: "Frango",
    slices: 8
  }
  
console.log(frango);

interface Pizzavegetarian extends Pizza {
    flavor: "Marguerita" | "Palmito" | "Cogumelos";
}

interface Sugar extends Pizza {
    flavor: "Nutela" | "Goiabada com Queijo" | "Marshmallow";
}

// EXERCÍCIO 5
type callbackFilter<T> = (value: T, index?: number, array?: Array<T>) => boolean;

function myFilter<T>(array: Array<T>, callback: callbackFilter<T>): Array<T> {
  const newArray: Array<T> = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

console.log(myFilter([1, 2, 3], (item, index, array) => item < 3 ));

console.log(myFilter(["a", "b", "c"], (item, index, array) => {
  return item !== "a"
}));
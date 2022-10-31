export function greeter(name: string):string {
  return `Olá ${name}!`;
}

export function personAge(name: string, age: number): string {
  return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

export function triangle(base: number, height: number): number {
  return (base * height) / 2;
}

export function square(side: number): number {
  return side ** 2;
}

export function rectangle(base: number, height: number): number {
  return base * height;
}

export function losango(higherDiag: number, smallerDiag: number): number {
  return 0.5 * higherDiag * smallerDiag;
}

export function trapezio(higherBase: number, smallerBase: number, height: number): number {
  return 0.5 * height * (higherBase + smallerBase);
}

export function circle(raio: number): number {
  return raio * raio * Math.PI;
}

export enum weekDays {
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thrusday = 4,
  Friday = 5,
  Saturday = 6,
  Sunday = 7,
};

export enum rainbow {
  vermelho = 'red',
  laranja = 'orange',
  amarelo = 'yellow',
  verde = 'green',
  azul = 'blue',
  roxo = 'purple',
};
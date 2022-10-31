import * as Exercise from './exercises';

console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log(`A soma do array é igual a ${Exercise.sumArray([3, 6, 9])}`);

console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangle(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.triangle(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${Exercise.triangle(100, 200)}cm²`);

console.log(`Quadrado de lado 10cm: ${Exercise.square(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.square(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercise.square(100)}cm²`);

console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.rectangle(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercise.rectangle(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${Exercise.rectangle(100, 200)}cm²`);

console.log(`Losango de diagonais 32cm e 18cm: ${Exercise.losango(32, 18)}cm²`);
console.log(`Losango de diagonais 200cm e 50cm: ${Exercise.losango(200, 50)}cm²`);
console.log(`Losango de diagonais 75cm e 25cm: ${Exercise.losango(75, 25)}cm²`);


console.log(`Trapezio de bases 100cm e 70cm e altura 50cm: ${Exercise.trapezio(100, 70, 50)}cm²`);
console.log(`Trapezio de bases 100cm e 70cm e altura 50cm: ${Exercise.trapezio(75, 50, 35)}cm²`);
console.log(`Trapezio de bases 100cm e 70cm e altura 50cm: ${Exercise.trapezio(150, 120, 80)}cm²`);

console.log(`Círculo de raio 25cm: ${Exercise.circle(25)}cm²`);
console.log(`Círculo de raio 25cm: ${Exercise.circle(100)}cm²`);
console.log(`Círculo de raio 25cm: ${Exercise.circle(12.5)}cm²`);

console.log(Exercise.weekDays[1]);
console.log(Exercise.rainbow['vermelho']);
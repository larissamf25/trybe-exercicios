"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rainbow = exports.weekDays = exports.circle = exports.trapezio = exports.losango = exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return `Olá ${name}!`;
}
exports.greeter = greeter;
function personAge(name, age) {
    return `${name} tem ${age} anos!`;
}
exports.personAge = personAge;
function add(x, y) {
    return x + y;
}
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
function triangle(base, height) {
    return (base * height) / 2;
}
exports.triangle = triangle;
function square(side) {
    return side ** 2;
}
exports.square = square;
function rectangle(base, height) {
    return base * height;
}
exports.rectangle = rectangle;
function losango(higherDiag, smallerDiag) {
    return 0.5 * higherDiag * smallerDiag;
}
exports.losango = losango;
function trapezio(higherBase, smallerBase, height) {
    return 0.5 * height * (higherBase + smallerBase);
}
exports.trapezio = trapezio;
function circle(raio) {
    return raio * raio * Math.PI;
}
exports.circle = circle;
var weekDays;
(function (weekDays) {
    weekDays[weekDays["Monday"] = 1] = "Monday";
    weekDays[weekDays["Tuesday"] = 2] = "Tuesday";
    weekDays[weekDays["Wednesday"] = 3] = "Wednesday";
    weekDays[weekDays["Thrusday"] = 4] = "Thrusday";
    weekDays[weekDays["Friday"] = 5] = "Friday";
    weekDays[weekDays["Saturday"] = 6] = "Saturday";
    weekDays[weekDays["Sunday"] = 7] = "Sunday";
})(weekDays = exports.weekDays || (exports.weekDays = {}));
;
var rainbow;
(function (rainbow) {
    rainbow["vermelho"] = "red";
    rainbow["laranja"] = "orange";
    rainbow["amarelo"] = "yellow";
    rainbow["verde"] = "green";
    rainbow["azul"] = "blue";
    rainbow["roxo"] = "purple";
})(rainbow = exports.rainbow || (exports.rainbow = {}));
;

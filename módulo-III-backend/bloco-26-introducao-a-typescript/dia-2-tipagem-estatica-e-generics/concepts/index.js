"use strict";
function printCoord(pt) {
    console.log("O valor da cordenada x é: " + pt.x);
    console.log("O valor da coordenada y é: " + pt.y);
}
printCoord({ x: 100, y: 100 });
class Person {
    constructor(name, birthDate, age) {
        this.name = name;
        this.birthDate = birthDate;
        this.age = age;
    }
    speak() {
        console.log(`${this.name} está falando.`);
    }
    eat() {
        console.log(`${this.name} está comendo.`);
    }
    walk() {
        console.log(`${this.name} está andando.`);
    }
}
const person1 = new Person("Jane Doe", new Date("1986-01-01"));
const person2 = new Person("Jon Doe", new Date("1980-08-05"), 42);
console.log(person1);
person1.speak();
console.log(person2);
person2.walk();
class Dog {
    constructor(name, birthDate, age) {
        this.name = name;
        this.birthDate = birthDate;
        this.age = age;
    }
    speak() {
        console.log(`${this.name} está falando.`);
    }
    eat() {
        console.log(`${this.name} está comendo.`);
    }
    walk() {
        console.log(`${this.name} está andando.`);
    }
}
class House {
    constructor(address, age, size) {
        this.address = address;
        this.age = age;
        this.size = size;
    }
    statement() {
        console.log(`This house is located in ${this.address}, it has ${this.age} years and is ${this.size} m2`);
    }
}
const house1 = new House('Nunes Valente', 15, 150);
house1.statement();
class Flight {
    constructor(origin, destination, company, duration) {
        this.origin = origin;
        this.destination = destination;
        this.company = company;
        this.duration = duration;
    }
    announcement() {
        console.log(`This flight from ${this.company}, departing from ${this.origin} to ${this.destination} will take ${this.duration} minutes`);
    }
}
const flight1 = new Flight('Fortaleza', 'Paris', 'AirFrance', 300);
flight1.announcement();

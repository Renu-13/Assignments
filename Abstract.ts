
abstract class Shape {
    color: string;
    constructor(color: string) {
        this.color = color;
    }
    abstract calculateArea(): number;
    getColor(): string {
        return this.color;
    }
}

class Circle extends Shape {
    radius: number;
    constructor(color: string, radius: number) {
        super(color);
        this.radius = radius;
    }
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    width: number;
    height: number;
    constructor(color: string, width: number, height: number) {
        super(color);
        this.width = width;
        this.height = height;
    }

    // Implementation of the calculateArea method
    calculateArea(): number {
        return this.width * this.height;
    }
}

const circle = new Circle("red", 5);
console.log(`Circle color: ${circle.getColor()}, Area: ${circle.calculateArea()}`);

const rectangle = new Rectangle("blue", 4, 6);
console.log(`Rectangle color: ${rectangle.getColor()}, Area: ${rectangle.calculateArea()}`);

//2
interface Vehicle {
    speed: number;
    move(): void; 
}
class Car implements Vehicle {
    speed: number;
    constructor(speed: number) {
        this.speed = speed;
    }
    move(): void {
        console.log(`The car is moving at ${this.speed} km/h.`);
    }
}
class Bicycle implements Vehicle {
    speed: number;
    constructor(speed: number) {
        this.speed = speed;
    }
    move(): void {
        console.log(`The bicycle is moving at ${this.speed} km/h.`);
    }
}
const car = new Car(120);
car.move(); 
const bicycle = new Bicycle(20);
bicycle.move();

//3
interface Flyable {
    fly(): void; 
}
abstract class Bird {
    name: string; 
    constructor(name: string) {
        this.name = name;
    }
    abstract eat(): void;
}

class Eagle extends Bird implements Flyable {
    constructor(name: string) {
        super(name);
    }
    eat(): void {
        console.log(`${this.name} Eagle`);
    }
    fly(): void {
        console.log(`${this.name} Eagle`);
    }
}

class Sparrow extends Bird implements Flyable {
    constructor(name: string) {
        super(name);
    }
    eat(): void {
        console.log(`${this.name} Sparrow`);
    }
    fly(): void {
        console.log(`${this.name} Sparrow `);
    }
}
const eagle = new Eagle("Eagle");
eagle.eat(); 
eagle.fly(); 
const sparrow = new Sparrow("Sparrow");
sparrow.eat(); 
sparrow.fly(); 

//4
class Person {
    name: string; 
    constructor(name: string) {
        this.name = name;
    }
    speak(): void {
        console.log(`${this.name} a`);
    }
}
interface Employee extends Person {
    salary: number; 
    age: number; 
    email: string; 
    work(): void; 
}
class Developer implements Employee {
    name: string; 
    salary: number; 
    age: number; 
    email: string; 
    constructor(name: string, salary: number, age: number, email: string) {
        this.name = name;
        this.salary = salary;
        this.age = age;
        this.email = email;
    }
    speak(): void {
        console.log(`${this.name} a`);
    }
    work(): void {
        console.log(`${this.name} a`);
    }
}
const developer = new Developer("A", 80000, 30, "a@example.com");
developer.speak(); 
developer.work();  

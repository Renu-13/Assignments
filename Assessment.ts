
// Exercise 1:
// Define Typed Arrays

console.log("Exercise-1");
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers);

let strings: string[] = ["apple", "banana", "cherry"];
console.log(strings);

let booleans: boolean[] = [true, false, true];
console.log(booleans);

let mixed: (number | string)[] = [1, "two", 3, "four"];
console.log(mixed);

// Exercise 2:
// Array Manipulation

console.log("Exercise-2");
let fruits: string[] = ["apple", "banana", "mango"];
console.log(fruits);

fruits.push("grapes");
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.splice(2, 0, "pineapple");
console.log(fruits);

fruits.reverse();
console.log(fruits);

// Exercise 3:
// Map, Filter, and Reduce

console.log("Exercise-3");
let numbersArr: number[] = [10, 20, 30, 40, 50, 60];

let doubled = numbersArr.map(num => num * 2);
console.log("Doubled numbers:", doubled);

let filtered = numbersArr.filter(num => num > 50);
console.log("Filtered numbers:", filtered);

let sum = numbersArr.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum);

// Exercise 4:
// Find and FindIndex
console.log("Exercise-4");
let values: number[] = [10, 20, 30, 40, 50];

let result = values.find(num => num > 25);
console.log("First number > 25:", result);

let index = values.findIndex(num => num === 40);
console.log("Index of 40:", index);

// Exercise 5:
// Sorting an Array

console.log("Exercise-5");
let scores: number[] = [55, 23, 87, 12, 99, 38];

let ascending = [...scores].sort((a, b) => a - b);
console.log("Ascending order:", ascending);

let descending = [...scores].sort((a, b) => b - a);
console.log("Descending order:", descending);

// Exercise 6:
// Tuple Types

console.log("Exercise-6");
let student: [string, number, boolean] = ["John", 21, true];
console.log(student);

student[1] = 22;
console.log(student);

// Exercise 7:
// Working with includes() and some()

console.log("Exercise-7");
let roles: string[] = ["User", "Editor", "Admin", "Moderator"];

let hasAdmin = roles.includes("Admin");
console.log("Contains Admin:", hasAdmin);

let hasSuper = roles.some(role => role.startsWith("Super"));
console.log("Has Super role:", hasSuper);

// Exercise 8:
// Flattening an Array

console.log("Exercise-8");
let nestedArray: (number | number[])[] = [1, [2, 3], [4, [5, 6]]];

let flattenedArray = nestedArray.flat(2);
console.log(flattenedArray);

// Exercise 9:
// Merging and Removing Duplicates

console.log("Exercise-9");
let arr1: number[] = [1, 2, 3, 4];
let arr2: number[] = [3, 4, 5, 6];

let mergedArray = [...arr1, ...arr2];
let uniqueArray = [...new Set(mergedArray)];
console.log(uniqueArray);

// Exercise 10:
// Interface with Arrays

console.log("Exercise-10");
interface Employee {
    name: string;
    age: number;
    position: string;
}

let employees: Employee[] = [
    { name: "Alice", age: 28, position: "Developer" },
    { name: "Bob", age: 35, position: "Manager" },
    { name: "Charlie", age: 32, position: "Designer" }
];

let filteredEmployees = employees.filter(emp => emp.age > 30);
console.log(filteredEmployees);
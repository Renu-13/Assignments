//1 concat 
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArr = arr1.concat(arr2);
console.log(combinedArr); 

//2
let names1 = ["Alice", "Bob"];
let names2 = ["Charlie", "David"];
let names3 = ["Eve", "Frank"];
let mergedNames = names1.concat(names2, names3);
console.log(mergedNames); 

//3
let arr: (boolean | string | number)[] = [true, false];
let arra2: string[] = ["Yes", "No"];
let arr3: (boolean | string | number)[] = arr.concat(arra2, [1, 2, 3]);
console.log(arr3);  

//4
let numbers = [10, 20, 30, 40, 50];
numbers.copyWithin(0, 3, 5);
console.log(numbers);

//5
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
fruits.copyWithin(1, 3, 5);
console.log(fruits); 
    

//6
let array = [1, 2, 3, 4, 5, 6];
arr.copyWithin(0, 2);
console.log(arr); 

//7
let num = [2, 4, 6, 8, 10];
let allEven = num.every(num => num % 2 === 0);
console.log(allEven); 

//8
let words = ["apple", "banana", "avocado"];
let result = words.every(word => word.startsWith("a"));
console.log(result); 
     

//9
function areAllPositive(numbers: number[]): boolean {
    return numbers.every(num => num > 0);
  }
  console.log(areAllPositive([1, 2, 3, 4])); 
  console.log(areAllPositive([-1, 2, 3, 4])); 
  
//10
let ar = [1, 2, 3, 4, 5];
arr.fill(0);
console.log(ar); 

//11
let a = ["A", "B", "C", "D", "E"];
arr.fill("X", 1, 4);
console.log(a); 
    

//12
let s = ["pending", "pending", "pending", "pending", "pending"];
s.fill("done", 2);
console.log(s); 

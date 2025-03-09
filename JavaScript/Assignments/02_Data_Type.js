// 1. String 
let name = "Ansh";
console.log("String:", name);

// 2. Number 
let age = 25;
let price = 99.99;
console.log("Number:", age);
console.log("Number:", price);

// 3. BigInt 
let bigNumber = 123456789n;
console.log("BigInt:", bigNumber);

// 4. Boolean 
let isOnline = true;
let hasAccess = false;
console.log("Boolean:", isOnline, hasAccess);

// 5. Undefined 
let unknown;
console.log("Undefined:", unknown);

// 6. Null 
let emptyValue = null;
console.log("Null:", emptyValue);

// 7. Symbol 
let id1 = Symbol("id");
let id2 = Symbol("id"); 
console.log("Symbol:", id1, id2, id1 === id2);

// 8. Object 
let person = { name: "Alice", age: 30 };
console.log("Object:", person);

// 9. Array 
let fruits = ["Apple", "Banana", "Cherry"];
console.log("Array:", fruits);

// 10. Function 
function greet() {
  return "Welcome Java Script..!";
}
console.log("Function:", greet());

//Data types using typeof
console.log("\n--- Data Types Check ---");
console.log("typeof name:", typeof name);
console.log("typeof age:", typeof age);
console.log("typeof bigNumber:", typeof bigNumber);
console.log("typeof isOnline:", typeof isOnline);
console.log("typeof unknown:", typeof unknown);
console.log("typeof emptyValue:", typeof emptyValue);
console.log("typeof id1:", typeof id1);
console.log("typeof person:", typeof person);
console.log("typeof fruits:", typeof fruits);
console.log("typeof greet:", typeof greet);

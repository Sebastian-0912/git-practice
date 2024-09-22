// main.js
import Stack from './stack.js';

let stack = new Stack();

console.log("=== push testing ===");
stack.push(10);
stack.push(20);
stack.push(30);
stack.print(); // "10 20 30"

console.log("\n=== pop testing ===");
console.log("Pop:", stack.pop()); //  30
stack.print(); // "10 20"

console.log("\n=== peek testing ===");
console.log("Peek:", stack.peek()); //  20
stack.print(); // "10 20"

console.log("\n=== isEmpty testing ===");
console.log("Is stack empty?:", stack.isEmpty()); // false
stack.clear();
console.log("Is stack empty after clear?:", stack.isEmpty()); // true

console.log("\n=== size testing ===");
stack.push(40);
stack.push(50);
console.log("Size of stack:", stack.size()); //  2
stack.print(); //  "40 50"

console.log("\n=== clear testing ===");
stack.clear();
stack.print(); //  "The stack is empty."
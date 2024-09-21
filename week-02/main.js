// main.js
import Stack from './stack.js';

let stack = new Stack();
stack.print();
stack.push(5);
stack.push(5);
stack.push(6);
stack.push(8);
stack.push(8);
stack.print();

stack.pop();
stack.print();

// TODO: 應該還要做哪些測試，以驗證自己開發的 stack 是沒有問題的？
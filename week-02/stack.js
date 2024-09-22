// stack.js
// 完成以下 TODO 的部分，並且以 Module 的方式匯出 (ESM): add {"type": "module"} in package.json
export default class Stack {
	// # 代表 private field, 也就是無法直接被instance存取，需要透過 class 內的 method 存取
  #items;
  constructor() {
    this.#items = []; 
  }

  // 在 stack 頂部加入元素i
  push(element) {
		this.#items.push(element);
  }

  // 移除並回傳 stack 頂部的元素
  pop() {
		return this.#items.pop();
  }

  // 回傳 stack 頂部的元素，但不移除它
  peek() {
    let lenght = this.#items.length;
    return this.#items[lenght-1];
  }

  // 檢查 stack 是否為空
  isEmpty() {
    return !this.#items.length;
    // TODO
  }

  // 回傳 stack 中元素的個數
  size() {
    return this.#items.length;
    // TODO
  }

  // 清空 stack 
  clear() {
    this.#items = [];
  }

  // 印出 stack 內容
  print() {
    if(this.isEmpty()) console.log("The stack is empty.");
    else console.log(this.#items.join(' '));
    
  }
}
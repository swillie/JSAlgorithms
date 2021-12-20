/**
 * Node class for the stack
 */
class Node {
  /**
   * Creates new node
   * @param {any} val
   */
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Stack class
 */
class Stack {
  /**
   * Creates new stack
   */
  constructor() {
    this.first = null;
    this.end = null;
    this.size = 0;
  }
  /**
   *
   * @return {Node} Last element in list
   */
  pop() {
    if (!this.first) return null;
    const current = this.first;
    if (this.size === 1) {
      this.first = null;
      this.end = null;
      this.size = 0;
      return current.val;
    }
    this.first = current.next;
    current.next = null;
    this.size -= 1;
    return current.val;
  }
  /**
   *
   * @param {any} val
   * @return {number} Size of stack
   */
  push(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.end = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size += 1;
    return this.size;
  }
}

const stack = new Stack();
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack.push(4));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

module.exports = Stack;

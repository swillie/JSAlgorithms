/**
 * Node class for the queue
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
 * Queue class
 * Add to end, and remove from begin
 */
class Queue {
  /**
   * Constructor for queue
   */
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  /**
   *
   * @param {any} val Value to add to queue
   * @return {number} Size of queue
   */
  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    }
    this.last.next = newNode;
    this.last = newNode;
    this.size += 1;
    return this.size;
  }
  /**
   * @return {any}
   */
  dequeue() {
    if (!this.first) return null;
    const node = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    node.next = null;
    this.size -= 1;
    return node.val;
  }
}

let q = new Queue();
console.log(q.enqueue('FIRST'));
console.log(q.enqueue('SECOND'));
console.log(q.enqueue('THIRD'));

console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());

module.exports = Queue;

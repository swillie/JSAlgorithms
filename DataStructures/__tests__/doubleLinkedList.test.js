/**
 * Node class for doubly linked list
 */
class Node {
  /**
   * Create a new doubly linked node
   * @param {any} val Value of the node
   */
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
/**
 * Class for DoublyLinkedList
 */
class DoublyLinkedList {
  /**
   * Print list as array to visualize entire list
   */
  printAsArray() {
    const arr = [];
    let current = this.head;
    console.log('List length', this.length);
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
  /**
   * Create a doubly linked list
   */
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  /**
   * Push value to end of list
   * @param {any} val The value to add to the list
   * @return {DoublyLinkedList} this list after push
   */
  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }
  /**
   * Remove last element from list and return it
   * @return {any} Return the last value in list
   */
  pop() {
    let returnNode = null;
    if (this.length === 0) {
      return undefined;
    }
    if (this.length === 1) {
      returnNode = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return returnNode;
    }
    returnNode = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    returnNode.prev = null;
    this.length -= 1;
    return returnNode;
  }
  /**
   * Shift - Remove and return first element in list
   * @return {Node} First element in list
   */
  shift() {
    if (this.length === 0) {
      return undefined;
    }

    const returnNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = returnNode.next;
      returnNode.next = null;
      this.head.prev = null;
    }
    this.length -= 1;
    return returnNode;
  }
  /**
   * Unshift - Add to beginning of list
   * @param {any} val Value to add to list
   * @return {DoublyLinkedList}
   */
  unshift(val) {
    if (this.length === 0) return this.push(val);
    newNode = new Node(val);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.length += 1;
    return this;
  }
  /**
   *
   * @param {number} idx - The index to retrieve
   * @return {Node} The node at index idx
   */
  get(idx) {
    let returnNode = null;
    if (idx < 0 || idx >= this.length) return undefined;
    /* Check if index is less than halfway point in list.
    if it is, start at head. Otherwise, start at tail */
    let i = 0;
    if (idx < this.length / 2) {
      returnNode = this.head;
      for (i = 0; i < idx; i++) {
        returnNode = returnNode.next;
      }
    } else {
      returnNode = this.tail;
      for (i = this.length - 1; i > idx; i--) {
        returnNode = returnNode.prev;
      }
    }
    return returnNode;
  }
  /**
   *
   * @param {any} val New value for element
   * @param {number} idx the index to update
   * @return {boolean} If value was updated
   */
  set(val, idx) {
    if (idx < 0 || idx >= this.length) return false;

    const node = this.get(idx);
    if (node != null) {
      node.val = val;
      return true;
    }
    return false;
  }
  /**
   *
   * @param {any} val The value to insert
   * @param {number} idx Index to insert new value
   * @return {DoublyLinkedList} list
   */
  insert(val, idx) {
    if (!idx || idx < 0 || idx > this.length) return false;
    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    const newNode = new Node(val);
    const node = this.get(idx - 1);

    newNode.next = node.next;
    node.next.prev = newNode;

    node.next = newNode;
    newNode.prev = node;

    this.length += 1;
    return this;
  }
  /**
   *
   * @param {number} idx Index to remove from list
   * @return {Node} removed node
   */
  remove(idx) {
    if (!idx || idx < 0 || idx >= this.length) return false;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    const removedNode = this.get(idx);
    removedNode.next.prev = removedNode.prev;
    removedNode.prev.next = removedNode.next;
    removedNode.next = null;
    removedNode.prev = null;
    this.length -= 1;
    return removedNode;
  }
}

list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
console.log('Get -1', list.get(-1));
console.log('Get 0', list.get(0));
console.log('Get 1', list.get(1));
console.log('Get 2', list.get(2));
console.log('Get 3', list.get(3));
console.log('Get 4', list.get(4));
console.log('Insert 33-3', list.insert(33, 3));
list.printAsArray();
console.log('Remove 33', list.remove(3));
list.printAsArray();
module.exports = DoublyLinkedList;

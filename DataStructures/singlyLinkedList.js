/** Class representing a node in linked list */
class Node {
  /**
   * Create a node
   * @param {any} val - The value of the node
   */
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Class representing a Singly Linked List */
class SinglyLinkedList {
  /**
   * Create a singly linked list
   */
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  /**
   * Add val to end of linked list
   * @param {any} val
   * @return {SinglyLinkedList}
   */
  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
    return this;
  }

  /**
   * @return {Node} Return last node in list
   */
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  /**
   * Shift - remove and return first element from list
   * @return {Node} Return first element in list
   */
  shift() {
    if (!this.head) return undefined;
    const returnVal = this.head;
    this.head = this.head.next;
    this.length -= 1;
    if (this.length === 0) {
      this.tail = null;
    }
    return returnVal;
  }
  /**
   * unshift - Add val to beginning of list
   * @param {any} val The vale to insert
   * @return {SinglyLinkedList}
   */
  unshift(val) {
    const newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = this.head;
    } else {
      newHead.next = this.head;
      this.head = newNode;
    }

    this.length += 1;
    return this;
  }
  /**
   * Get element from a linked list
   * @param {any} idx - Position in list to return
   * @return {Node}
   */
  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let count = 0;
    let ptr = this.head;
    for (count = 0; count < idx; count++) {
      ptr = ptr.next;
    }
    return ptr;
  }
  /**
   * Set value for an element in linked list
   * @param {any} val,
   * @param {number} idx,
   * @return {boolean}
   */
  set(val, idx) {
    const node = this.get(idx);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  /**
   * Insert item into linked list
   * @param {any} val
   * @param {number} idx
   * @return {boolean}
   */
  insert(val, idx) {
    if (idx < 0 || idx > this.length) {
      return false;
    }
    if (idx === this.length) return !!this.push(val);
    if (idx === 0) return !!this.unshift(val);

    newNode = new Node(val);
    prevNode = this.get(idx - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length += 1;
    return true;
  }
  /**
   * Remove item from linked list
   * @param {number} idx
   * @return {boolean}
   */
  remove(idx) {
    if (idx < 0 || idx > this.length) {
      return false;
    }

    if (idx === this.length - 1) return this.pop();
    if (idx === 0) return this.shift();

    const prevNode = this.get(idx - 1);
    const removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    length -= 1;
    return removedNode;
  }
  /**
   * Print as array helper method
   */
  printAsArray() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
  /**
   * Reverse the linked list
   * @return {Array} Return the reversed link list
   */
  reverse() {
    this.printAsArray();
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    this.printAsArray();
    return this;
  }
  /**
   *
   * @param {Node} list1 List 1 head
   * @param {Node} list2 List 2 head
   * @return {Node} head of sorted list
   */
  static merge_sorted_lists(list1, list2) {
    let merged = new Node();
    const head = merged;
    let count = 0;
    while (list1 && list2) {
      if (list1.val <= list2.val) {
        if (count === 0) {
          merged.val = list1.val;
        } else {
          merged.next = list1;
        }
        list1 = list1.next;
      } else {
        if (count === 0) {
          merged.val = list2.val;
        } else {
          merged.next = list2;
        }
        list2 = list2.next;
      }
      count++;
      if (count > 1) {
        merged = merged.next;
      }
    }
    while (list1) {
      merged.next = list1;
      merged = merged.next;
      list1 = list1.next;
    }
    while (list2) {
      merged.next = list2;
      merged = merged.next;
      list2 = list2.next;
    }
    return head;
  }
}

module.exports = SinglyLinkedList;

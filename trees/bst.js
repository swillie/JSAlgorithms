/**
 * Node class for Binary Search Tree
 */
class Node {
  /**
   * Creates node for Binary Search Tree
   * @param {any} value
   */
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
/**
 * Binary Search Tree class
 */
class BinarySearchTree {
  /**
   * Creates a new binary search tree
   */
  constructor() {
    this.root = null;
  }
  /**
   * Insert into Tree
   * @param {any} val Value to insert into tree
   * @return {BinarySearchTree}
   */
  insert(val) {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let ptr = this.root;
    while (true) {
      if (ptr.value === val) return undefined;
      if (val < ptr.value) {
        if (ptr.left === null) {
          ptr.left = newNode;
          return this;
        }
        ptr = ptr.left;
      } else {
        if (ptr.right === null) {
          ptr.right = newNode;
          return this;
        }
        ptr = ptr.right;
      }
    }
  }
  /**
   *
   * @param {any} val Value to find
   * @return {boolean} true if item is in tree, false if not in the tree
   */
  find(val) {
    if (this.root === null) return false;
    if (this.root.val === val) return true;
    let ptr = this.root;
    while (ptr !== null) {
      if (val === ptr.value) return true;
      if (val < ptr.value) {
        if (ptr.left === null) return false;
        ptr = ptr.left;
      } else {
        if (val > ptr.value) {
          if (ptr.right === null) return false;
          ptr = ptr.right;
        }
      }
    }
    return false;
  }
  /**
   * Breadth first search - Searching each row at a time before going down to next level
   * Horizontal before vertical
   * @return {array} Array of values in tree
   */
  bfs() {
    const vals = [];
    const queue = [];
    let node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      vals.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return vals;
  }
  /**
   * Depth First Search - Pre Order
   * @return {array} Array of values in tree
   */
  dfs_preOrder() {
    const vals = [];
    const current = this.root;
    /**
     *
     * @param {Node} node
     */
    function traverse(node) {
      vals.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return vals;
  }
  /**
   * Depth First Search - Post Order
   * @return {array} Array of values in tree
   */
  dfs_postOrder() {
    const vals = [];
    const current = this.root;
    /**
     *
     * @param {Node} node
     */
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      vals.push(node.value);
    }
    traverse(current);
    return vals;
  }

  /**
   * Depth First Search - In Order
   * @return {array} Array of values in tree
   */
  dfs_inOrder() {
    const vals = [];
    const current = this.root;
    /**
     *
     * @param {Node} node
     */
    function traverse(node) {
      if (node.left) traverse(node.left);
      vals.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return vals;
  }
}

const bst = new BinarySearchTree();
/*
 Exprected Tree:
                      10
                    5    12
                  3  7  11

*/
bst.insert(10);
bst.insert(12);
bst.insert(11);
bst.insert(5);
bst.insert(7);
bst.insert(3);
bst.insert(10);
bst.insert(7);

console.log(bst.bfs());
console.log(bst.dfs_preOrder());
console.log(bst.dfs_postOrder());
console.log(bst.dfs_inOrder());
module.exports = BinarySearchTree;

/**
 * Max BInary Heap Class
 */
class MaxBinaryHeap {
  /**
   * Creates a new Max Binary Heap
   */
  constructor() {
    this.values = [];
  }
  /**
   * Inserts new element into heap
   * @param {any} element Item to insert
   */
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  /**
   * Bubble up to the correct spot
   */
  bubbleUp() {
    // Parent index = Math.floor((index-1)/2)
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
}

module.exports = MaxBinaryHeap;

/**
 *
 * @param {number} val
 * @param {TreeNode} left
 * @param {TreeNode} right
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 *
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
function rangeSum(root, low, high) {
  let sum = 0;
  if (root !== null) {
    if (root.val >= low && root.val <= high) {
      sum += root.val;
    }
    if (root.val > low) {
      sum += rangeSum(root, low, high);
    }
    if (root.val < high) {
      sum += rangeSum(root, low, high);
    }
  }
  return sum;
}

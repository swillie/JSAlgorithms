/**
 * recursiveRange
 * @param {number} num,
 * @return {number} The sum of the value from 0 to num
 */
function recursiveRange(num) {
  if (num === 0) return 0;

  return num + recursiveRange(num - 1);
}

module.exports = recursiveRange;

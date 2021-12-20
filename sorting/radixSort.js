/**
 * getDigit
 * @param {number} num
 * @param {number} pos
 * @return {number} Value at {pos} in number
 */
function getDigit(num, pos) {
  return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10;
}
/**
 * mostDigits
 * @param {Array} nums
 * @return {number} largest number of digits of element in array
 */
function mostDigits(nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, digitCount(nums[i]));
  }
  return max;
}

/**
 *
 * @param {number} num
 * @return {number} Number of digits in num
 */
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
/**
 * radixSort
 * @param {Array} arr Input array
 * @return {Array} returns the sorted array
 */
function radixSort(arr) {
  const maxDigits = mostDigits(arr);
  for (let i = 0; i < maxDigits; i++) {
    const buckets = Array.from({ length: 10 }, () => []);
    for (let k = 0; k < arr.length; k++) {
      const digit = getDigit(arr[k], i);
      buckets[digit].push(arr[k]);
    }
    arr = [].concat(...buckets);
  }
  return arr;
}

module.exports = radixSort;

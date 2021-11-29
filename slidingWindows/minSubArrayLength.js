/**
 * MinSubArrayLength
 * Find the smallest array subset where the sum is >= num
 * @param {Array} arr,
 * @param {number} sum
 * @return {number} smallest array subset
 */
function minSubArrayLength(arr, sum) {
  if (!Array.isArray(arr)) return undefined;

  let total = 0;
  let left = 0;
  let right = 0;
  let min = Infinity;
  while (left < arr.length) {
    // If total is less than sum, move right to expand the window
    // If total >= sum, we shrink the window by moving left up 1
    if (total < sum && right < arr.length) {
      total += arr[right];
      right++;
    } else if (total >= sum) {
      min = Math.min(min, right - left);
      total -= arr[left];
      left++;
    } else {
      break;
    }
  }
  return min === Infinity ? 0 : min;
}

console.log(minSubArrayLength([2, 3, 1, 2, 4, 3], 7));
module.exports = minSubArrayLength;

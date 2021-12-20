/**
 * Rotate array by k
 * Example [1,2,3,4,5,6,7] k = 3     5,6,7,1,2,3,4
 * @param {Array} nums
 * @param {number} k
 */
function rotate(nums, k) {
  const len = nums.length;
  const idx = k % len;
  // Get the item to move
  const begArr = nums.slice(0, len - idx);
  // remove the items sliced above
  nums.splice(0, len - idx);
  // use spread operator to add in items sliced above
  nums.splice(len - 1, 0, ...begArr);
}

/**
 * Remove duplicates in-place. Final result should be at start of array
 * @param {Array} nums
 * @return {number} size of new array
 */
function removeDuplicates(nums) {
  /* if (nums.length === 0) return 0;
  if (nums.length === 1) return 1;
  let i = 0;
  let j = 1;
  while (j < nums.length) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
      j++;
    } else j++;
  }
  return i + 1; */

  const s = new Set(nums);
  nums.splice(0, s.size, ...s);
  return s.size;
}

module.exports = { rotate, removeDuplicates };

/**
 * duplicateArguments
 * @param {Array} nums,
 * @return {number} return missing number
 */
function findMissingValue(nums) {
  const map = {};
  let max = 0;
  let low = 0;
  for (const num of nums) {
    map[num] = 1;
    max = Math.max(max, num);
    low = Math.min(low, num);
  }
  if (low + nums.length - 1 == nums[nums.length - 1]) {
    return nums[nums.length - 1] + 1;
  }
  for (let i = 0; i < nums.length; i++) {
    if (!map[i]) return i;
  }
  return max + 1;
}

console.log(findMissingValue([3, 0, 1]));
module.exports = findMissingValue;

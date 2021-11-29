/**
 * maxSubarraySum
 * @param {Array} arr,
 * @param {number} size
 * @return {number} return largest sum of subarry size {size}
 */
function maxSubarraySum(arr, size) {
  if (!Array.isArray(arr) || !arr.length || size > arr.length) {
    return undefined;
  }

  let max = 0;
  let temp = 0;

  // Sum the first {size} elements in the array
  for (let i = 0; i < size; i++) {
    max += arr[i];
  }

  temp = max;
  for (let i = size; i < arr.length; i++) {
    /* No need to add everything again. Since we are sliding over, just subtract
    the first element then add the next element in array */
    temp = temp - arr[i - size] + arr[i];
    max = Math.max(max, temp);
  }

  return max;
}

module.exports = maxSubarraySum;

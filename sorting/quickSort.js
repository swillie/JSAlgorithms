/**
 * swap
 * @param {Array} arr Input array
 * @param {number} idx1 first swap index
 * @param {number} idx2 second swap index
 * @return {Array} Array with the two indexes swapped
 *
 */
function swap(arr, idx1, idx2) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
  return arr;
}
/**
 * pivot
 * @param {Array} arr Input array
 * @param {number} start starting index
 * @param {number} end ending index
 * @return {number} The index to move to
 *
 */
function pivot(arr, start = 0, end = arr.length - 1) {
  const pivot = arr[start];
  let idx = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      idx++;
      swap(arr, idx, i);
    }
  }
  swap(arr, start, idx);
  return idx;
}

/**
 * quickSort
 * @param {Array} arr Input array
 * @param {number} left
 * @param {number} right
 * @return {Array} returns the sorted array
 */
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pIdx = pivot(arr, left, right);
    quickSort(arr, left, pIdx - 1);
    quickSort(arr, pIdx + 1, right);
  }
  return arr;
}

module.exports = quickSort;

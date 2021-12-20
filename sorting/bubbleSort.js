/**
 * swap
 * @param {Array} arr,
 * @param {any} idx1,
 * @param {any} idx2
 * @return {Array} return array with the 2 items swapped
 */
function swap(arr, idx1, idx2) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
  return arr;
}

/**
 * bubbleSort
 * @param {Array} arr
 * @return {Array} returns the sorted array
 */
function bubbleSort(arr) {
  let noSwap = true;
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        arr = swap(arr, j, j + 1);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

module.exports = bubbleSort;

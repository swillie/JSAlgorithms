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
 * selectionSort
 * @param {Array} arr
 * @return {Array} returns the sorted array
 */
function selectionSort(arr) {
  let minVal = 0;
  let rightPt = 0;
  let swapVals = false;
  for (let i = 0; i < arr.length; i++) {
    minVal = arr[i];
    swapVals = false;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < minVal) {
        rightPt = j;
        minVal = arr[j];
        swapVals = true;
      }
    }
    if (swapVals) {
      arr = swap(arr, i, rightPt);
    }
  }
  return arr;
}

module.exports = selectionSort;

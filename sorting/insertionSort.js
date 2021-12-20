/**
 * insertionSort
 * @param {Array} arr
 * @return {Array} returns the sorted array
 */
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = 0;
    const current = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = current;
  }

  return arr;
}

/**
 * shellShort
 * @param {Array} arr
 * @return {Array}
 */
function shellSort(arr) {
  const n = arr.length;
  for (let interval = n / 2; interval > 0; interval /= 2) {
    for (let i = interval; i < n; i++) {
      const current = arr[i];
      let k = 0;
      for (k = i; k >= interval && arr[k - interval] > current; k -= interval) {
        arr[k] = arr[k - interval];
      }
      arr[k] = current;
    }
  }
  return arr;
}
module.exports = { insertionSort, shellSort };

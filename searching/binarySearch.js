/**
 * binarySearch
 * @param {Array} arr,
 * @param {any} val
 * @return {number} return index in array where val is found,or -1 if not found
 */
function binarySearch(arr, val) {
  if (!Array.isArray(arr)) return -1;

  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((right + left) / 2);

  while (left <= right) {
    const tempVal = arr[middle];
    if (arr[middle] === val) return middle;

    if (val < tempVal) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }

    middle = Math.floor((right + left) / 2);
  }
  return -1;
}

module.exports = binarySearch;

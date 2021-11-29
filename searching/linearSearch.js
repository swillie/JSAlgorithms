/**
 * linearSearch
 * @param {Array} arr,
 * @param {any} val
 * @return {number} return index in array where val is found,or -1 if not found
 */
function linearSearch(arr, val) {
  if (!Array.isArray(arr)) return -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

module.exports = linearSearch;

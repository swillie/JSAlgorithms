/**
 * countUniqueValues
 * @param {Array} arr,
 * @return {number} return number of unique values in array
 */
function countUniqueValues(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  }
  if (!arr.length) {
    return 0;
  }
  if (arr.length === 1) {
    return 1;
  }
  let pl = 0;
  for (let pr = 1; pr < arr.length; pr++) {
    if (arr[pl] !== arr[pr]) {
      pl++;
      arr[pl] = arr[pr];
    }
  }
  return pl + 1;
}

module.exports = countUniqueValues;

/**
 * productOfArray
 * Find the product of all the values in an array
 * @param {Array} arr,
 * @return {number} product
 */
function productOfArray(arr) {
  if (!Array.isArray(arr)) return 0;
  if (arr.length === 0) return 1;

  return arr[0] * productOfArray(arr.slice(1));
}

module.exports = productOfArray;

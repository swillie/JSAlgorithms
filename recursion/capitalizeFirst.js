/**
 * Capialize first in array
 * @param {Array} arr
 * @return {Array} array with first letter capitalized
 */
function capitalizeFirst(arr) {
  if (!Array.isArray(arr)) return null;

  if (!arr.length) return [];
  if (arr.length === 1) return arr[0].capitalizeFirst();

  return arr.concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(['cat', 'dog', 'bird']));
module.exports = capitalizeFirst;

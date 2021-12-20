/**
 * singleNumber
 * @param {Array} nums,
 * @return {number} return number that only appears once
 */
function singleNumber(nums) {
  const map = {};

  for (const num of nums) {
    if (map[num]) {
      delete map[num];
    } else {
      map[num] = 1;
    }
  }
  const single = Object.keys(map);
  return parseInt(single[0]);
}

/**
 * singleNumberThree
 * @param {Array} nums,
 * @return {number} return number that only appears once, all others appear 3 times
 */
function singleNumberThree(nums) {
  const map = {};

  for (const num of nums) {
    if (map[num] && map[num] === 2) {
      delete map[num];
    } else {
      map[num] = (map[num] || 0) + 1;
    }
  }
  const single = Object.keys(map);
  return parseInt(single[0]);
}

/**
 * twoSingleNumbers
 * @param {Array} nums,
 * @return {number} return number that only appears once, all others appear 3 times
 */
function twoSingleNumbers(nums) {
  const map = {};

  for (const num of nums) {
    if (map[num]) {
      delete map[num];
    } else {
      map[num] = 1;
    }
  }
  const keys = Object.keys(map);
  return keys.map((elem) => parseInt(elem, 10));
}

module.exports = { singleNumber, singleNumberThree, twoSingleNumbers };

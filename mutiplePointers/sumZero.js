/**
 * sumZero
 * @param {Array} arr,
 * @param {boolean} returnString
 * @return {array} return array of any two values where the sum in zero
 */
function sumZero(arr) {
  if (!Array.isArray(arr) || !arr.length) {
    return undefined;
  }
  let pl = 0;
  let pr = arr.length - 1;
  while (pl < pr) {
    if (arr[pl] + arr[pr] === 0) {
      return [arr[pl], arr[pr]];
    }
    if (arr[pl] + arr[pr] > 0) {
      pr--;
    } else {
      pl++;
    }
  }
  return undefined;
}

module.exports = sumZero;

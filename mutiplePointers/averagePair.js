/**
 * averagePair
 * @param {Array} arr,
 * @param {number} avg
 * @return {boolean} return if any 2 values in array equals to avg
 */
function averagePair(arr, avg) {
  if (!Array.isArray(arr) || arr.length < 2) {
    return false;
  }
  let pl = 0;
  let pr = arr.length - 1;
  while (pl < pr) {
    const tempAvg = (arr[pl] + arr[pr]) / 2;
    if (tempAvg === avg) {
      return true;
    }
    if (tempAvg > avg) {
      pr--;
    } else {
      pl++;
    }
  }
  return false;
}

module.exports = averagePair;

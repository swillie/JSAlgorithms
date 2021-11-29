/**
 * collectOddNumbers
 * @param {Array} arr,
 * @return {Arrat} Array of odd numbers in input array
 */
function collectOddNumbers(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddNumbers(arr.slice(1)));

  return newArr;
}

module.exports = collectOddNumbers;

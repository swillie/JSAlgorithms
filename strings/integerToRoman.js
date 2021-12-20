/**
 * @param {number} num
 * @return {string}
 */
function integerToRoman(num) {
  const arr = [
    [1000, 'M'],
    [900, 'M'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ];

  let ret = '';
  for (let i = 0; i < arr.length; i++) {
    while ([arr[i][0]] <= num) {
      ret += arr[i][1];
      num -= arr[i][0];
    }
  }
  return ret;
}

console.log(integerToRoman(3));
console.log(integerToRoman(58));
console.log(integerToRoman(1994));

module.exports = integerToRoman;

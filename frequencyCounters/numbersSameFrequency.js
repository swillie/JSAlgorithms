const simpleAnagram = require('./simpleAnagram');

/**
 * numberSameFrequency
 * Return the {num} value in fibonacci sequence
 * @param {number} num1,
 * @param {number} num2
 * @return {boolean} If the inputs have the same number of each digit
 */
function numbersSameFrequency(num1, num2) {
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return false;
  }
  const str1 = num1.toString();
  const str2 = num2.toString();

  if (str1.length != str2.length) {
    return false;
  }

  if (simpleAnagram(str1, str2)) {
    return true;
  }
  return false;
}

module.exports = numbersSameFrequency;

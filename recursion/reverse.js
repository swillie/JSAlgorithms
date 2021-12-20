/**
 * Reverse a sting using recursion
 * @param {string} str
 * @return {string} input string reversed
 */
function reverse(str) {
  if (str.length <= 1) return str;

  return reverse(str.substring(1)) + str[0];
}

module.exports = reverse;

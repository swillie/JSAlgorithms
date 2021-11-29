/**
 * factorial
 * Find the factorial of given number using recursion
 * @param {number} num,
 * @return {number} factorial of given number
 */
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

module.exports = factorial;

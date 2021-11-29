/**
 * power
 * Find the power of a number using recursion
 * @param {number} base,
 * @param {number} exp
 * @return {number} base to the power of exp
 */
function power(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
}

module.exports = power;

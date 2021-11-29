/**
 * fibonacci
 * Return the {num} value in fibonacci sequence
 * @param {number} num,
 * @return {number} The {num} value in fibonacci sequence
 */
function fibonacci(num) {
  /*  */
  if (num <= 2) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

module.exports = fibonacci;

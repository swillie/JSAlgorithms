/**
 * isSubsequence
 * Return the {num} value in fibonacci sequence
 * @param {string} str1,
 * @param {string} str2
 * @return {number} If letters in str1 appear in str2 in the same order
 */
function isSubsequence(str1, str2) {
  /* Check is letters in str1 appear in str2 in the same order.
  There can be extra letters inbetween
  in str 2, as long as the order from str1 exists in str2
  */
  let p1 = 0;
  let p2 = 0;
  while (p1 < str1.length && p2 < str2.length) {
    if (str1[p1] === str2[p2]) {
      if (p1 === str1.length - 1) {
        return true;
      }
      p1++;
      p2++;
    } else {
      p2++;
    }
  }
  return false;
}

module.exports = isSubsequence;

/**
 * isPalindrome
 * @param {string} str
 * @return {boolean} If string is a palindrome
 */
function isPalindrome(str) {
  // if down to 1 character and the functioned hasn't ended, must be palindrome
  if (str.length === 1) return true;
  // for last 2 elements, check if they are the same. if so the functions
  // return true, else returns false
  if (str.length === 2) return str[0] === str[1];

  // if first and last elements match, shrink string by 1 on both sides
  // and call again
  if (str[0] === str.slice(-1)) {
    return isPalindrome(str.slice(1, -1));
  }
  // characters didn't match so can't be palindrome
  return false;
}

module.exports = isPalindrome;

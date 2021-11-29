/**
 * isAlphaNumeric
 * Return the {num} value in fibonacci sequence
 * @param {string} char,
 * @return {boolean} Returns if given character is alpanumeric
 */
function isAlphaNumeric(char) {
  if (typeof char !== 'string') {
    return false;
  }
  const code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
}

module.exports = isAlphaNumeric;

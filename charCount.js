const isAlphaNumeric = require('./utils/utils');
/**
 * objectToString
 * @param {Object} obj,
 * @return {string} returns object as a simple string
 */
function objectToString(obj) {
  return Object.entries(obj).reduce((str, [p, val]) => {
    return `${str}${p}${val}`;
  }, '');
}

/**
 * charCount
 * @param {string} str,
 * @param {boolean} returnString
 * @return {number} return character count of a string
 */
function charCount(str, returnString = true) {
  const map = {};
  for (const char of str) {
    if (isAlphaNumeric(char)) {
      if (map[char] > 0) {
        map[char]++;
      } else {
        map[char] = 1;
      }
    }
  }
  if (returnString) {
    return objectToString(map);
  }
  return JSON.stringify(map);
}

/**
 * charCountRegex
 * @param {string} str,
 * @param {boolean} returnString
 * @return {number} return character count of a string
 */
function charCountRegex(str, returnString = true) {
  const map = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (/[a-zA-Z0-9]/.test(char)) {
      if (map[char] > 0) {
        map[char]++;
      } else {
        map[char] = 1;
      }
    }
  }
  if (returnString) {
    return objectToString(map);
  }
  return JSON.stringify(map);
}

module.exports = { charCountRegex, charCount };

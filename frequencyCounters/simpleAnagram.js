/**
 * simpleAnagram
 * @param {string} str1,
 * @param {string} str2
 * @return {number} return if the 2 strings are anagrams
 */
function simpleAnagram(str1, str2) {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    return false;
  }
  if (str1.length !== str2.length) {
    return false;
  }

  if (str1 === str2) {
    return true;
  }
  const fc1 = {};
  const fc2 = {};

  for (const value of str1) {
    fc1[value] = (fc1[value] || 0) + 1;
  }

  for (const value of str2) {
    fc2[value] = (fc2[value] || 0) + 1;
  }

  for (const key of fc1) {
    if (!(key in fc2)) {
      return false;
    }
    if (fc1[key] !== fc2[key]) {
      return false;
    }
  }
  return true;
}

module.exports = simpleAnagram;

/**
 * findLongestSubstring
 * Find the the longest substring with no repeating values
 * @param {string} str,
 * @return {number} length of longest unique substring
 */
function findLongestSubstring(str) {
  let left = 0;
  let max = 0;
  const seen = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (seen[char]) {
      left = Math.max(left, seen[char]);
    }

    max = Math.max(max, i - left + 1);
    seen[char] = i + 1;
  }
  return max;
}

module.exports = findLongestSubstring;

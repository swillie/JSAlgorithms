/**
 * @param {string} s
 * @return {number}
 */
function romanToInteger(s) {
  const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };

  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    const val = map[s[i]];
    if (val < map[s[i + 1]]) {
      sum -= val;
    } else {
      sum += val;
    }
  }
  return sum;
}

module.exports = romanToInteger;

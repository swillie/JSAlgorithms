/**
 *
 * @param {string} str Part of string to check if valid part of IP
 * @return {boolean}
 */
function isValidPart(str) {
  // This is for IPv4
  // IP part can not be greater than 4 digits
  if (str.length > 3) return false;

  // Cannot have anything after a leading zero
  if (str.startsWith(0) && str.length > 1) return false;
  const num = parseInt(str);

  // IP part can be from 0 to 255
  if (num >= 0 && num <= 255) {
    return true;
  } else {
    return false;
  }
}

/**
 * Check if valid IP addressed can be formed with string givem
 * @param {string} str String of numbers
 * @return {Array} array of valid IP addresses
 */
function createIpAddress(str) {
  const result = [];
  const len = str.length;

  for (let i = 1; i < len && i < 4; i++) {
    const first = str.substring(0, i);
    if (!isValidPart(first)) continue;
    for (let j = 1; i + j < len && j < 4; j++) {
      const second = str.substring(i, i + j);
      if (!isValidPart(second)) continue;
      for (let k = 1; i + j + k < len && k < 4; k++) {
        const third = str.substring(i + j, i + j + k);
        const fourth = str.substring(i + j + k);
        if (!isValidPart(third) || !isValidPart(fourth)) continue;
        result.push(first + '.' + second + '.' + third + '.' + fourth);
      }
    }
  }
  return result;
}
console.log(createIpAddress('25525511135'));
module.exports = createIpAddress;

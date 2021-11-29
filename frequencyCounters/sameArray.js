/* This function takes in 2 arrays. It returns true if every value in array
1 has the squared value in array2.
Not only does the square need to exist in array2, but the number of occurences
must match array1.
Example. if array1 has 3 2s, array2 must have only 3 4s
*/

/**
 * sameSquaredArray
 * @param {Array} array1,
 * @param {Array} array2
 * @return {boolean} return if array to represents the square of array1
 */
function sameSquaredArray(array1, array2) {
  if (Array.isArray(array1) && !array1.length) {
    return false;
  }
  if (Array.isArray(array2) & !array2.length) {
    return false;
  }
  if (array1.length != array2.length) {
    return false;
  }

  const fc1 = {};
  const fc2 = {};
  // Capture the frequency of each value in array 1
  for (const value of array1) {
    fc1[value] = (fc1[value] || 0) + 1;
  }

  // Capture the frequence of each value in array 2
  for (const value of array2) {
    fc2[value] = (fc2[value] || 0) + 1;
  }

  /* For each element in array 1, check if the square exists in array2.
  if not, return false. If it does exist,
  check if the counts match */

  for (const key of fc1) {
    if (!(key ** 2 in fc2)) {
      return false;
    }
    if (fc1[key] !== fc2[key ** 2]) {
      return false;
    }
  }
  return true;
}

module.exports = sameSquaredArray;

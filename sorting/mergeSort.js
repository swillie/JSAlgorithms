/**
 * merge two sorted arrays
 * @param {Array} arr1,
 * @param {Array} arr2;
 * @return {Array} returns the sorted array
 */
function merge(arr1, arr2) {
  const arr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr.push(arr1[i]);
      i++;
    } else {
      arr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    arr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    arr.push(arr2[j]);
    j++;
  }
  console.log(arr);
  return arr;
}

/**
 * mergeSort
 * @param {Array} arr
 * @return {Array} returns the sorted array
 */
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

mergeSort([10, 8, 6, 4, 2, 1, 0]);
module.exports = mergeSort;

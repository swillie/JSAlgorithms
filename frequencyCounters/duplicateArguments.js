/**
 * duplicateArguments
 * @return {boolean} return if any duplicate arguments provided
 */
function duplicateArguments(...args) {
  const map = {};
  if (args.length === 0) {
    return false;
  }
  // Loop through arguments, adding to map, init to zero if doesn't exist
  for (const val of args) {
    map[val] = (map[val] || 0) + 1;
  }

  for (const key in map) {
    if (map[key] > 1) return true;
  }
  return false;
}

/**
 * duplicateArguments
 * @return {boolean} return if any duplicate arguments provided using Set
 */
function duplicateArgumentsSet(...args) {
  return new Set(args).size !== args.length;
}

module.exports = { duplicateArguments, duplicateArgumentsSet };

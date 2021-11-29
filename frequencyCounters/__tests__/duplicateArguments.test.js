const {
  duplicateArguments,
  duplicateArgumentsSet,
} = require('../duplicateArguments');

test('Duplicate arguments? (1, 2, 3)', () => {
  expect(duplicateArguments(1, 2, 3)).toBe(false);
});
test('Duplicate arguments? (1, 2, 3, 5, 9, 10)', () => {
  expect(duplicateArguments(1, 2, 3, 5, 9, 10)).toBe(false);
});
test('Duplicate arguments? (1)', () => {
  expect(duplicateArguments(1)).toBe(false);
});
test('Duplicate arguments? ()', () => {
  expect(duplicateArguments()).toBe(false);
});
test('Duplicate arguments? (1, 1)', () => {
  expect(duplicateArguments(1, 1)).toBe(true);
});
test('Duplicate arguments? (1, 2, 3, 4, 5, 6, 2)', () => {
  expect(duplicateArguments(1, 2, 3, 4, 5, 6, 2)).toBe(true);
});

test('Duplicate arguments? (1, 2, 3)', () => {
  expect(duplicateArgumentsSet(1, 2, 3)).toBe(false);
});
test('Duplicate arguments? (1, 2, 3, 5, 9, 10)', () => {
  expect(duplicateArgumentsSet(1, 2, 3, 5, 9, 10)).toBe(false);
});
test('Duplicate arguments? (1)', () => {
  expect(duplicateArgumentsSet(1)).toBe(false);
});
test('Duplicate arguments? ()', () => {
  expect(duplicateArgumentsSet()).toBe(false);
});
test('Duplicate arguments? 1, 1)', () => {
  expect(duplicateArgumentsSet(1, 1)).toBe(true);
});
test('Duplicate arguments? 1, 2, 3, 4, 5, 6, 2)', () => {
  expect(duplicateArgumentsSet(1, 2, 3, 4, 5, 6, 2)).toBe(true);
});

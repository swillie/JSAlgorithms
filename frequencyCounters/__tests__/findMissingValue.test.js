const findMissingValue = require('../findMissingValue');

const value = test.each`
  arr                            | expectedResult
  ${[3, 0, 1]}                   | ${2}
  ${[0, 1]}                      | ${2}
  ${[9, 6, 4, 2, 3, 5, 7, 0, 1]} | ${8}
  ${[0]}                         | ${1}
`;

describe('Find missing value', () => {
  value(
    'The missing value in $arr: $expectedValue',
    ({ arr, expectedResult }) => {
      expect(findMissingValue(arr)).toBe(expectedResult);
    },
  );
});

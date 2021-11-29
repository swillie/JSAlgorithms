const collectOddNumbers = require('../collectOddNumbers');

const value = test.each`
  arr             | expectedResult
  ${[1, 3, 5]}    | ${[1, 3, 5]}
  ${[1, 4, 6, 8]} | ${[1]}
  ${[2, 4, 6, 8]} | ${[]}
`;

describe('Collect odd numbers', () => {
  value(
    'Return odd numbers in $arr: $expectedResult',
    ({ arr, expectedResult }) => {
      expect(collectOddNumbers(arr)).toStrictEqual(expectedResult);
    },
  );
});

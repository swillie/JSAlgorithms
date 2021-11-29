const sameSquaredArray = require('../sameArray');

const squaredArray = test.each`
  a            | b            | expectedResult
  ${[]}        | ${[]}        | ${false}
  ${[1, 2, 3]} | ${[1, 4, 9]} | ${true}
  ${[1, 2]}    | ${[4]}       | ${false}
  ${[2, 3, 4]} | ${[4, 4, 9]} | ${false}
  ${1}         | ${[1, 2]}    | ${false}
  ${[3, 2, 1]} | ${[1, 4, 9]} | ${true}
`;
describe('Is array2 same as array1 squared', () => {
  squaredArray(
    'Is $b the same as $a squared: $expectedResult',
    ({ a, b, expectedResult }) => {
      expect(sameSquaredArray(a, b)).toBe(expectedResult);
    },
  );
});

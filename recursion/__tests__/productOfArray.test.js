const productOfArray = require('../productOfArray');

const values = test.each`
  arr              | expectedResult
  ${[1]}           | ${1}
  ${[1, 2]}        | ${2}
  ${(2, 4, 5)}     | ${0}
  ${[2, 4, 5]}     | ${40}
  ${[1, 2, 3, 10]} | ${60}
`;
describe('Product of array', () => {
  values(
    'product of values in $arr: expectedResult',
    ({ arr, expectedResult }) => {
      expect(productOfArray(arr)).toBe(expectedResult);
    },
  );
});

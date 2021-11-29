const countUniqueValues = require('../countUniqueValues');

const values = test.each`
  input                    | expectedResult
  ${2}                     | ${undefined}
  ${[]}                    | ${0}
  ${[2]}                   | ${1}
  ${[1, 2, 3]}             | ${3}
  ${[1, 1, 2, 3, 3, 3]}    | ${3}
  ${[1, 1, 4, 4, 4, 4, 4]} | ${2}
  ${[1, 1]}                | ${1}
  ${[1, 2]}                | ${2}
`;

describe('Count unique values', () => {
  values(
    'Number of unique values in $input: $expectedResult',
    ({ input, expectedResult }) => {
      expect(countUniqueValues(input)).toBe(expectedResult);
    },
  );
});

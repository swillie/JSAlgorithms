const sumZero = require('../sumZero');

const sumData = test.each`
  input                   | expectedResult
  ${[1, 2, 3, 4, 5]}      | ${undefined}
  ${[-1, -2, -3, -4, -5]} | ${undefined}
  ${[-4, -2, 0, 1, 2, 5]} | ${[-2, 2]}
  ${[-5, 0, 5]}           | ${[-5, 5]}
  ${[-5, -3, -1, 0, 1]}   | ${[-1, 1]}
  ${[]}                   | ${undefined}
`;

describe('Do any 2 elements sum to zero', () => {
  sumData(
    'Do any 2 elements in $input sum to zero: $expectedResult',
    ({ input, expectedResult }) => {
      expect(sumZero(input)).toStrictEqual(expectedResult);
    },
  );
});

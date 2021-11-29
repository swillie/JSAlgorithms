const power = require('../power');

const value = test.each`
  base | exp  | expectedResult
  ${2} | ${0} | ${1}
  ${2} | ${2} | ${4}
  ${2} | ${4} | ${16}
`;

describe('Power function', () => {
  value(
    '$base to the $power power: $expectedResult',
    ({ base, exp, expectedResult }) => {
      expect(power(base, exp)).toBe(expectedResult);
    },
  );
});

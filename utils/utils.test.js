const isAlphaNumeric = require('./utils');

const alphaNumericTestCases = test.each`
  input  | expectedResult
  ${''}  | ${false}
  ${'A'} | ${true}
  ${'b'} | ${true}
  ${'!'} | ${false}
  ${1}   | ${false}
  ${'1'} | ${true}
`;
describe('Is Character Alpha Numeric', () => {
  alphaNumericTestCases(
    'Is character $input alphanumeric: $expectedResult',
    ({ input, expectedResult }) => {
      expect(isAlphaNumeric(input)).toBe(expectedResult);
    },
  );
});

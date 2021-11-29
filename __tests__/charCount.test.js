const { charCountRegex, charCount } = require('../charCount');

const testCases = test.each`
  input          | expectedResult
  ${''}          | ${''}
  ${'DDDEEFTTT'} | ${'D3E2F1T3'}
  ${'HELLO'}     | ${'H1E1L2O1'}
  ${'HI THERE!'} | ${'H2I1T1E2R1'}
`;
describe('Character Count with RegEx', () => {
  testCases(
    'Counting characters in $input should be $expectedResult',
    ({ input, expectedResult }) => {
      expect(charCountRegex(input)).toBe(expectedResult);
    },
  );
});

describe('Character Count', () => {
  testCases(
    'Counting characters in $input should be $expectedResult',
    ({ input, expectedResult }) => {
      expect(charCount(input)).toBe(expectedResult);
    },
  );
});

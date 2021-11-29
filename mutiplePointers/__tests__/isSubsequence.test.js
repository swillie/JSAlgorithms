const isSubsequence = require('../isSubsequence');

const values = test.each`
  str1       | str2             | expectedResult
  ${'hello'} | ${'hello world'} | ${true}
  ${'sing'}  | ${'sting'}       | ${true}
  ${'abc'}   | ${'abracadabra'} | ${true}
  ${'abc'}   | ${'acb'}         | ${false}
`;

describe('Check is letters in string 1 are in string 2,in the same order', () =>
  values(
    'Are letters in $str1 in $str2: $expectedResult',
    ({ str1, str2, expectedResult }) => {
      expect(isSubsequence(str1, str2)).toBe(expectedResult);
    },
  ));

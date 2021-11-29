const findLongestSubstring = require('../findLongestSubstring');

const values = test.each`
  str                 | expectedResult
  ${''}               | ${0}
  ${'rithmschool'}    | ${7}
  ${'thisisawesome'}  | ${6}
  ${'thecatinthehat'} | ${7}
  ${'aaabbb'}         | ${2}
  ${'aaaaaaa'}        | ${1}
  ${'aaaaaaab'}       | ${2}
  ${'abaaaaaa'}       | ${2}
`;

describe('Find largest unique substring size', () => {
  values(
    'Longest unique substring size in $str: $expectedResult',
    ({ str, expectedResult }) => {
      expect(findLongestSubstring(str)).toBe(expectedResult);
    },
  );
});

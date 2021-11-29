const simpleAnagram = require('../simpleAnagram');

const anagramData = test.each`
  a                  | b                  | expectedResult
  ${''}              | ${''}              | ${true}
  ${'aaz'}           | ${'zza'}           | ${false}
  ${'anagram'}       | ${'nagaram'}       | ${true}
  ${'rat'}           | ${'car'}           | ${false}
  ${'awesome'}       | ${'awesom'}        | ${false}
  ${'qwerty'}        | ${'qeywrt'}        | ${true}
  ${'texttwisttime'} | ${'timetwisttext'} | ${true}
`;
describe('Simple are strings anagrams', () => {
  anagramData(
    'Are $a and $b anagrams?: $expectedResult',
    ({ a, b, expectedResult }) => {
      expect(simpleAnagram(a, b)).toBe(expectedResult);
    },
  );
});

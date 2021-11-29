const binarySearch = require('../binarySearch');

const values = test.each`
  arr                          | val    | expectedResult
  ${[1, 2, 3]}                 | ${2}   | ${1}
  ${[1, 2, 3, 4, 7, 10, 21]}   | ${5}   | ${-1}
  ${[1, 2, 3, 4, 7, 10, 21]}   | ${7}   | ${4}
  ${['a', 'b', 'c']}           | ${'c'} | ${2}
  ${['a', 'd', 'l', 'q']}      | ${'p'} | ${-1}
  ${['a', 'd', 'f', 'l', 'q']} | ${'f'} | ${2}
  ${[]}                        | ${1}   | ${-1}
  ${'a'}                       | ${'a'} | ${-1}
`;

describe('Linear search', () => {
  values(
    'Return index of $val in $arr: $expectedResult',
    ({ arr, val, expectedResult }) => {
      expect(binarySearch(arr, val)).toBe(expectedResult);
    },
  );
});

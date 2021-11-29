const linearSearch = require('../linearSearch');

const values = test.each`
  arr                          | val    | expectedResult
  ${[1, 2, 3]}                 | ${2}   | ${1}
  ${[1, 2, 3]}                 | ${4}   | ${-1}
  ${['a', 'd', 'c']}           | ${'c'} | ${2}
  ${['a', 'd', 'q', 'a', 'l']} | ${'p'} | ${-1}
  ${[]}                        | ${1}   | ${-1}
  ${'a'}                       | ${'a'} | ${-1}
`;

describe('Linear search', () => {
  values(
    'Return index of $val in $arr: $expectedResult',
    ({ arr, val, expectedResult }) => {
      expect(linearSearch(arr, val)).toBe(expectedResult);
    },
  );
});

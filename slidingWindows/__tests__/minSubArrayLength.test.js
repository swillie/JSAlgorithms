const minSubArrayLength = require('../minSubArrayLength');

const values = test.each`
  arr                                       | total | expectedResult
  ${[2, 3, 1, 2, 4, 3]}                     | ${7}  | ${2}
  ${[2, 1, 6, 5, 4]}                        | ${9}  | ${2}
  ${[3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19]} | ${52} | ${1}
  ${[1, 4, 16, 22, 5, 7, 8, 9, 10]}         | ${39} | ${3}
  ${[1, 4, 16, 22, 5, 7, 8, 9, 10]}         | ${55} | ${5}
  ${[4, 3, 3, 8, 1, 2, 3]}                  | ${11} | ${2}
  ${[1, 4, 16, 22, 5, 7, 8, 9, 10]}         | ${95} | ${0}
`;
describe('Find min substring size where sum is greater than or equal to given number', () => {
  values(
    'Min substring size of $arr: with $total: $expectedResult',
    ({ arr, total, expectedResult }) => {
      expect(minSubArrayLength(arr, total)).toBe(expectedResult);
    },
  );
});

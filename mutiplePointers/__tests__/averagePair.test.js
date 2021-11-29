const averagePair = require('../averagePair');

const values = test.each`
  arr                               | avg    | expectedResult
  ${[1, 2, 3]}                      | ${2.5} | ${true}
  ${[1, 3, 3, 5, 6, 7, 10, 12, 19]} | ${8}   | ${true}
  ${[-1, 0, 3, 4, 5, 6]}            | ${4.1} | ${false}
  ${[]}                             | ${4}   | ${false}
`;
describe('Does any pair equal given average', () => {
  values(
    'Does the average of any pairs in $arr equal $avg: $expectedResult',
    ({ arr, avg, expectedResult }) => {
      expect(averagePair(arr, avg)).toBe(expectedResult);
    },
  );
});

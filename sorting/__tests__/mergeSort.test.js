const mergeSort = require('../mergeSort');

const values = test.each`
  arr                       | expectedResult
  ${[]}                     | ${[]}
  ${[1]}                    | ${[1]}
  ${[1, 2]}                 | ${[1, 2]}
  ${[1, 2, 3]}              | ${[1, 2, 3]}
  ${[2, 1]}                 | ${[1, 2]}
  ${[2, 1, 5, 4]}           | ${[1, 2, 4, 5]}
  ${[10, 8, 6, 4, 2, 1, 0]} | ${[0, 1, 2, 4, 6, 8, 10]}
`;

describe('Merge sort', () => {
  values('Sorting $arr: $expectedResult', ({ arr, expectedResult }) => {
    expect(mergeSort(arr)).toEqual(expectedResult);
  });
});

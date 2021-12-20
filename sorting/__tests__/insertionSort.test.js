const { insertionSort, shellSort } = require('../insertionSort');

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

describe('Insertion sort', () => {
  values('Sorting $arr: $expectedResult', ({ arr, expectedResult }) => {
    expect(insertionSort(arr)).toEqual(expectedResult);
  });
});

describe('Shell sort', () => {
  values('Sorting $arr: $expectedResult', ({ arr, expectedResult }) => {
    expect(shellSort(arr)).toEqual(expectedResult);
  });
});

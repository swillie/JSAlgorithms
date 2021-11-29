const maxSubarraySum = require('../maxSubarraySum');

const values = test.each`
  arr                | size | expectedResult
  ${[]}              | ${1} | ${undefined}
  ${[3]}             | ${1} | ${3}
  ${[4, 5, 9, 2, 4]} | ${1} | ${9}
  ${[4, 5, 9, 2, 4]} | ${2} | ${14}
  ${[4, 5, 9, 2, 4]} | ${5} | ${24}
  ${[4, 5, 9, 4]}    | ${5} | ${undefined}
  ${3}               | ${1} | ${undefined}
`;

describe('Find max sum subarray', () => {
  values(
    'Max subarray sum in $arr of size $size: $expectedResult',
    ({ arr, size, expectedResult }) => {
      expect(maxSubarraySum(arr, size)).toBe(expectedResult);
    },
  );
});

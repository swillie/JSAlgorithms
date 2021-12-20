const {
  singleNumber,
  singleNumberThree,
  twoSingleNumbers,
} = require('../singleNumber');

const values = test.each`
  arr                | expectedValue
  ${[4, 1, 2, 1, 2]} | ${4}
  ${[2, 2, 1]}       | ${1}
  ${[1]}             | ${1}
`;

const valuesThree = test.each`
  arr                       | expectedValue
  ${[2, 2, 3, 2]}           | ${3}
  ${[0, 1, 0, 1, 0, 1, 99]} | ${99}
`;

const valuesTwoNumbers = test.each`
  arr                   | expectedValue
  ${[1, 2, 1, 3, 2, 5]} | ${[3, 5]}
`;

describe('Find non-repeating number', () => {
  values('Single number in $arr: $expectedValue', ({ arr, expectedValue }) => {
    expect(singleNumber(arr)).toBe(expectedValue);
  });
});

describe('Find non-repeating number - others are 3', () => {
  valuesThree(
    'Single number in $arr: $expectedValue',
    ({ arr, expectedValue }) => {
      expect(singleNumberThree(arr)).toBe(expectedValue);
    },
  );
});

describe('Find 2 non-repeating numbers - others are 2', () => {
  valuesTwoNumbers(
    'Single numbers in $arr: $expectedValue',
    ({ arr, expectedValue }) => {
      expect(twoSingleNumbers(arr)).toStrictEqual(expectedValue);
    },
  );
});

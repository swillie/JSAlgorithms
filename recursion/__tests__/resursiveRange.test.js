const recursiveRange = require('../recursiveRange');

const values = test.each`
  num   | expectedValue
  ${0}  | ${0}
  ${1}  | ${1}
  ${2}  | ${3}
  ${6}  | ${21}
  ${10} | ${55}
`;

describe('Add sequence of numbers', () => {
  values('Adding from 0 to $num: $expectedValue', ({ num, expectedValue }) => {
    expect(recursiveRange(num)).toBe(expectedValue);
  });
});

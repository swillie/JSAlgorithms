const fibonacci = require('../fibonacci');

const values = test.each`
  num   | expectedValue
  ${1}  | ${1}
  ${2}  | ${1}
  ${4}  | ${3}
  ${10} | ${55}
  ${28} | ${317811}
  ${35} | ${9227465}
`;

describe('Find the nth value in fibonacci sequence', () => {
  values(
    'The $num value in fibonacci sequence: $expectedValue',
    ({ num, expectedValue }) => {
      expect(fibonacci(num)).toBe(expectedValue);
    },
  );
});

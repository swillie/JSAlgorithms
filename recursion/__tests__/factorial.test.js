const factorial = require('../factorial');

const values = test.each`
  val  | expectedResult
  ${3} | ${6}
  ${4} | ${24}
`;

describe('Recursive factoral', () => {
  values('Factoral of $val: $expectedResult', ({ val, expectedResult }) => {
    expect(factorial(val)).toBe(expectedResult);
  });
});

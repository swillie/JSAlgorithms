const numbersSameFrequency = require('../numbersSameFrequency');

const values = test.each`
  num1     | num2     | expectedResult
  ${182}   | ${281}   | ${true}
  ${45}    | ${54}    | ${true}
  ${12345} | ${54321} | ${true}
  ${1}     | ${1}     | ${true}
  ${12345} | ${5432}  | ${false}
  ${1}     | ${2}     | ${false}
  ${1}     | ${'A'}   | ${false}
  ${[]}    | ${1}     | ${false}
`;
describe('Check if two integers have the same frequency of digits', () => {
  values(
    'Do $num1 and $num2 have same frequency of digits? $expectedResult',
    ({ num1, num2, expectedResult }) => {
      expect(numbersSameFrequency(num1, num2)).toBe(expectedResult);
    },
  );
});

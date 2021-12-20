function helper(num){
  let str = ''
  let tempNum = 0;

  //Check hundreds
  tempNum = num / 1000;
  if (tempNum > 0) {
    str += (ONES[tempNum]) + 'Hundred '
  }

  tempNum = num % 100;
  if (tempNum >= 20 {
    let tens = tempNum / 10;
    str += TENS[tens];

    let ones = tempNum % 10;
    if (ones > 0) str += ONES[ones];
  })
  return str;
}
/**
 *
 * @param {number} num
 */
function integerToEnglish(num) {
  const least = {
    0: {
      'val': 1000000000,
      'name': 'Billion ',
    },
    1: {
      'val': 1000000,
      'name': 'Million ',
    },
    2: {
      'val': 1000,
      'name': 'Thousand ',
    },
    3: {
      'val': 100,
      'name': 'Hundred ',
    },
  };

  const ONES = [
    'Zero ',
    'One ',
    'Two ',
    'Three ',
    'Four ',
    'Five ',
    'Six ',
    'Seven ',
    'Eight ',
    'Nine ',
    'Ten ',
  ];
  const TEENS = [
    'Ten ',
    'Eleven ',
    'Twelve ',
    'Thirteen ',
    'Fourteen ',
    'Fifteen ',
    'Sixteen ',
    'Seventeen ',
    'Eighteen ',
    'Nineteen ',
  ];
  const TENS = [
    ' ',
    'Ten ',
    'Twenty ',
    'Thirty ',
    'Forty ',
    'Fifty ',
    'Sixty ',
    'Seventy ',
    'Eighty ',
    'Ninety ',
  ];

  let str = '';
  let tempNum = 0;
  if (num <= 10) return ONES[num];

  for (let i =0; i < 4)
}

module.exports = integerToEnglish;

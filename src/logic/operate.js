import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = 0;
  const x = Big(numberOne);
  const y = Big(numberTwo);
  switch (operation) {
    case '+':
      result = x.plus(y);
      break;
    case '-':
      result = x.minus(y);
      break;
    case '÷':
      result = x.div(y);
      break;
    case 'x':
      result = x.times(y);
      break;
    case '%':
      result = x.mod(y);
      break;
    default:
      break;
  }
};

export default operate;

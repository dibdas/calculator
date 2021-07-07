import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;
  switch (buttonName) {
    case '+/-':
      if (next) {
        total = (next * -1);
      } else if (total) {
        total *= -1;
      }
      break;
    case 'AC':
      total = 0;
      next = ' ';
      operation = ' ';
      break;
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '9':
      if (!operation) {
        total += buttonName;
      } else {
        next += buttonName;
      }
      break;
    case '.':
      break;
    case '=':
      total = operate(total, next, operation);
      break;

    default:
      break;
  }
  return { total, next, operation };
};
export default calculate;

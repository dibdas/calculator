import operate from '../../logic/operate';

describe('operate', () => {
  it('it should return the result of two given numbers and an operation ', () => {
    expect(operate('3', '2', '+')).toBe('5');
    expect(operate('8', '2', '-')).toBe('6');
    expect(operate('9', '3', 'x')).toBe('27');
    expect(operate('7', '2', '/')).toBe('3.5');
  });
});

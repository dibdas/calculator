import operate from '../../logic/operate';

describe('operate', () => {
  it('it should return the result of two given numbers and an operation ', () => {
    expect(operate('3', '2', '+')).toBe('5');
    expect(operate('3', '2', '-')).toBe('1');
    expect(operate('3', '2', '+')).toBe('5');
    expect(operate('3', '2', '+')).toBe('5');
  });
});

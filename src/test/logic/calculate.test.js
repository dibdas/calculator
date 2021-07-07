import calculate from '../../logic/calculate';

describe('calculate', () => {
  describe('button +/-', () => {
    it('return total as -12', () => {
      const result = calculate({
        total: '12',
        next: '',
        operation: null,
      }, '+/-');

      expect(result.total).toBe(-12);
    });

    it('return next as 28', () => {
      const result = calculate({
        total: '12',
        next: '28',
        operation: null,
      }, '+/-');

      expect(result.next).toBe('28');
    });
  });

  describe('button case AC', () => {
    it('clears the calculate data', () => {
      const result = calculate({
        total: '1',
        next: '9',
        operation: '+',
      }, 'AC');

      expect(result.total).toBe(0);
    });
  });

  it('return the total ', () => {
    const result = calculate({
      total: '10',
      next: '7',
      operation: '+',
    }, '=');

    expect(result.total).toBe('17');
  });
});

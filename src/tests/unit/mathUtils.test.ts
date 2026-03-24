import { add, subtract, multiply, divide } from '../../utils/mathUtils';

describe('mathUtils', () => {
  describe('add', () => {
    it('should correctly add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('should correctly add a positive and a negative number', () => {
      expect(add(5, -2)).toBe(3);
    });
  });

  describe('subtract', () => {
    it('should correctly subtract two numbers', () => {
      expect(subtract(10, 4)).toBe(6);
    });
  });

  describe('multiply', () => {
    it('should correctly multiply two numbers', () => {
      expect(multiply(3, 4)).toBe(12);
    });

    it('should correctly multiply by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    it('should correctly divide two numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });

    it('should throw an error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });
  });
});

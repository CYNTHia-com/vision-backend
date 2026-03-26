/**
 * Simple math utility functions for demonstration purposes.
 */

/**
 * Adds two numbers.
 * @param a First number
 * @param b Second number
 * @returns sum
 */
export const add = (a: number, b: number): number => {
  return a + b;
};

/**
 * Subtracts two numbers.
 * @param a First number
 * @param b Second number
 * @returns difference
 */
export const subtract = (a: number, b: number): number => {
  return a - b;
};

/**
 * Multiplies two numbers.
 * @param a First number
 * @param b Second number
 * @returns product
 */
export const multiply = (a: number, b: number): number => {
  return a * b;
};

/**
 * Divides two numbers.
 * @param a First number
 * @param b Second number
 * @returns quotient
 * @throws Error if dividing by zero
 */
export const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
};

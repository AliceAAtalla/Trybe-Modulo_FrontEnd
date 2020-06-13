/*
 * Crie uma função que gere um número aleatório entre 0 e 100.
 */
function randomNumber() {
  return Math.floor(Math.random() * 101);
}

describe('Mock function randomNumber()', () => {
  describe('Exercise 2', () => {
    randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
    test('How it returned', () => {
      expect(randomNumber(10, 5)).toBe(2);
    });
    test('Test whether the function was called', () => {
      expect(randomNumber).toHaveBeenCalled();
    });
    test('How many times it was called', () => {
      expect(randomNumber).toHaveBeenCalledTimes(1);
    });
    test('The function was called with the right parameters', () => {
      expect(randomNumber).toHaveBeenCalledWith(10, 5);
    });
  });
});

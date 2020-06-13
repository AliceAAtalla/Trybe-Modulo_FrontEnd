/*
 * Crie uma função que gere um número aleatório entre 0 e 100.
 */
function randomNumber() {
  return Math.floor(Math.random() * 101);
}

describe('Multiple tree numbers and Double number', () => {
  test('Multiple tree numbers', () => {
    randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
    expect(randomNumber(2, 5, 3)).toBe(30);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(2, 5, 3);
  });

  test('Double number', () => {
    randomNumber.mockReset();
    expect(randomNumber).toHaveBeenCalledTimes(0);
    randomNumber.mockImplementation((a) => a * 2);

    expect(randomNumber(2)).toBe(4);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(2);
  });
});

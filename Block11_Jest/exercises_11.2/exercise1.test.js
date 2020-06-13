/* 
* Crie uma função que gere um número aleatório entre 0 e 100. 
*/
function randomNumber() {
  return Math.floor(Math.random() * 101);
}

describe("Mock function randomNumber()", () => {
  describe("Exercise 1", () => {
    randomNumber = jest.fn().mockReturnValue(10);
    test("How it returned", () => {
      expect(randomNumber()).toBe(10);
    });
    test("Test whether the function was called", () => {
      expect(randomNumber).toHaveBeenCalled();
    });
    test("How many times it was called", () => {
      expect(randomNumber).toHaveBeenCalledTimes(1);
    });
  });
});

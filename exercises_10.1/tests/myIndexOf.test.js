const myIndexOf = require('../src/myIndexOf')

// Teste se a chamada myIndexOf([1, 2, 3, 4], 3) retorna o valor esperado
test("Returns the index of the number in the array", () => {
  expect(myIndexOf([1, 2, 3, 4], 3)).toBe(2);
})
// Teste se a chamada myIndexOf([1, 2, 3, 4], 5) retorna o valor esperado
test("Returns -1 if it does not exist in the array", () => {
  expect(myIndexOf([1, 2, 3, 4], 5)).toBe(-1);
})

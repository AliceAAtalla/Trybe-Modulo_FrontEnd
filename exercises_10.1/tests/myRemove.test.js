const myRemove = require('../src/myRemove')

// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
test("Remove number 3 and return [1, 2, 4]", () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
})

// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
test("Does not return the initial array", () => {
  expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
})

// Verifique se o array passado por parâmetro não sofreu alterações
test("Array passed by parameter has not changed", () => {
  expect(myRemove([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
})

// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
test("Removing missing number in array returns initial array", () => {
  expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
})

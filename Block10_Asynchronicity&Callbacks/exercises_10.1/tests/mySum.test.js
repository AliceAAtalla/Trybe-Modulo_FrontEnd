const mySum = require("../src/mySum");

// Teste se a chamada mySum([1, 2, 3, 4]) retorna o valor 10
test("The sum of these elements is equal to 10", () => {
  expect(mySum([1, 2, 3, 4])).toEqual(10);
})

// Teste se a chamada mySum([1, -2, -3, 4]) retorna o valor esperado
test("The sum of these elements is equal to 0", () => {
  expect(mySum([1, -2, -3, 4])).toEqual(0);
})

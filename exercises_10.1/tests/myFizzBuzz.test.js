const myFizzBuzz = require('../src/myFizzBuzz');

// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
test("Return of a number divisible by 3 and 5", () => {
  expect(myFizzBuzz(15)).toMatch('fizzbuzz')
})

// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
test("Return of a number divisible by 3", () => {
  expect(myFizzBuzz(6)).toMatch('fizz');
})

// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
test("Return of a number divisible by 5", () => {
  expect(myFizzBuzz(10)).toMatch('buzz');
})

// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
test('Return of a divisible number not by 3 or 5', () => {
  expect(myFizzBuzz(4)).toBe(4);
})

// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
test('', () => {
  expect(myFizzBuzz('invalid')).toBeFalsy();
})

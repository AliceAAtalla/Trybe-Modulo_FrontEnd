const assert = require('assert')

//? Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos. Ou seja:
//! Dica: use parâmetro rest.

const sum = (...num) => {
  let soma = 0;
  for (let i of num) {
    soma += i;
  }
  return soma;
}

assert.equal(sum(), 0)
assert.equal(sum(1), 1)
assert.equal(sum(1, 2), 3)
assert.equal(sum(1, 2, 3), 6)
assert.equal(sum(1, 2, 3, 4), 10)


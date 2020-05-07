/*Faça o teste de uma função que compara dois números e 
retorna true se o primeiro for maior que o segundo e false caso contrário.*/

const assert = require('assert');

function isAbove(num1, num2) {
  return num1 > num2;
}

// implemente seus testes aqui
assert.deepStrictEqual(isAbove(2, 1), true);
assert.deepStrictEqual(isAbove(2, 4), false);

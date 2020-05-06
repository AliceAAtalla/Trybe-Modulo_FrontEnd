
const assert = require('assert');
// escreva a função wordLengths para passar nos testes abaixo:
const wordLengths = (lista) => {
  const arrayNew = [];
  for (let i = 0; i < lista.length; i += 1) {
    arrayNew.push(lista[i].length);
  }
  return arrayNew;
};

//
const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];
const output = wordLengths(words);

assert.strictEqual(typeof wordLengths, 'function');
assert.deepEqual(output, expected);

const assert = require('assert');
// escreva a função addAllnumbers para passar nos testes abaixo:
const addAllnumbers = (num) => {
  let number = 0;
  for (let i in num) {
    number += num[i];
  }
  return number;
}

//
const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);

const assert = require('assert');

// escreva a função findTheNeedle para passar nos testes abaixo:
const findTheNeedle = (array, word) => {
  let expected = -1;
  for (let i in array) {
    if (word === array[i]) {
      expected = Number(i);
    }
  }
  return expected;
};
//

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
// -----------------------
words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
// -----------------------
words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');

// ---- TESTE -----
assert.strictEqual(output, expected);

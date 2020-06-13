/* 5. A função myRemoveWithoutCopy(arr, item) recebe um array arr e 
retorna o próprio array sem o elemento item caso ele exista no array*/

const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  let len = arr.length;
  for (let i = 0; i < len; i += 1) {
    if (arr[i] === item) {
      /* O método splice() altera o conteúdo de uma lista, adicionando novos elementos 
      enquanto remove elementos antigos.*/
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);

// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);

// Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4]), myRemoveWithoutCopy([1, 2, 3, 4]));

// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);

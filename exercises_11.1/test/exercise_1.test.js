const uppercase = require('../script/exercise_1')

test('Transforma as letras de uma palavra em letras maiúsculas', (done) => {
  expect.assertions(1);
  uppercase('test', (str) => {
    expect(str).toBe('TEST');
    done();
  });
});

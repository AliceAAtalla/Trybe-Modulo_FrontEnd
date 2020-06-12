const getUserName = require('../script/exercises_2-3');

test('Promisse test', () => {
  expect(getUserName(4)).resolves.toEqual('Mark');
  expect(getUserName(1)).rejects.toEqual({ 'error': 'User with 1 not found.' })
})

const thereIs = require('../src/thereIs');

test('type of a defined variable is not `undefined`', () => {
  expect(typeof (thereIs)).not.toBe('undefined');
});

test('type of a variable not defined is undefined', () => {
  expect(typeof (thereIsnt)).toBe('undefined');
});

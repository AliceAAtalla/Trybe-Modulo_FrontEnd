const thereIs = require('../src/thereIsFunction')

test('type of a defined function is not `function`', () => {
  expect(typeof (thereIs)).toBe('function');
});

test('type of a function not defined is undefined', () => {
  expect(typeof (thereIsnt)).toBe('undefined');
});

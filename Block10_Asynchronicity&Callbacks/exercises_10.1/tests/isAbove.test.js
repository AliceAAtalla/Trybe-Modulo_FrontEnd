const isAbove = require('../src/isAbove');

describe('7 is above 5', () => {
  test('7 is above 5', () => {
    expect(isAbove(7, 5)).toBeTruthy();
  });

  test('7 is not above 7', () => {
    expect(isAbove(7, 7)).toBeFalsy();
  });

  test('7 is not above 8', () => {
    expect(isAbove(7, 8)).toBeFalsy();
  });
});

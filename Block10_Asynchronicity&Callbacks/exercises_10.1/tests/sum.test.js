const sum = require('../src/sum')

test("The sum of 4 and 5 is 9", () => {
  expect(sum(4, 5)).toBe(9)
});

test("The sum of 0 and 0 is 0", () => {
  expect(sum(0, 0)).toBe(0)
})

test("Parameters must be numbers", () => {
  expect(() => {
    sum(4, '5');
  }).toThrow();
});

test("Error message", () => {
  expect(() => {
    sum("invalid");
  }).toThrow('parameters must be numbers');
});

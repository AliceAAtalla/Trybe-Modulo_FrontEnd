const object = require('../src/object')

// Compare dois objetos (JSON) para verificar se são idênticos ou não

test('obj1 !== obj2', () => {
  expect(object.obj1).toStrictEqual(object.obj2)
})

test('obj1 === obj3', () => {
  expect(object.obj1).not.toStrictEqual(object.obj3)
})

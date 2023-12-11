const findFirstRepeated = require('./index')

test('1#. Is number', () => {
  expect(typeof findFirstRepeated([1, 2, 3])).toBe('number')
})

test('1#. It finds the first repeated gift - Test 1', () => {
  const gifts = [2, 1, 3, 5, 3, 2]
  expect(findFirstRepeated(gifts)).toBe(3)
})

test('1#. It finds the first repeated gift - Test 2', () => {
  const gifts = [2, 2]
  expect(findFirstRepeated(gifts)).toBe(2)
})

test('1#. It finds the first repeated gift - Test 3', () => {
  const gifts = [2, 4, 3, 5, 1]
  expect(findFirstRepeated(gifts)).toBe(-1)
})

test('1#. It finds the first repeated gift - Test 4', () => {
  const gifts = [1, 3, 4, 5, 0, 1, 3, 0, 7]
  expect(findFirstRepeated(gifts)).toBe(1)
})

test('1#. It finds the first repeated gift - Test 5', () => {
  const gifts = []
  expect(findFirstRepeated(gifts)).toBe(-1)
})
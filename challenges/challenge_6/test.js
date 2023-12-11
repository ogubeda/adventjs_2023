const maxDistance = require('./index')

test('6#. It returns the max distance that can travel - Test 1', () => {
  expect(maxDistance(">>*<")).toEqual(2)
})

test('6#. It returns the max distance that can travel - Test 2', () => {
  expect(maxDistance("<<<<<")).toEqual(5)
})

test('6#. It returns the max distance that can travel - Test 3', () => {
  expect(maxDistance(">***>")).toEqual(5)
})

test('6#. It returns the max distance that can travel - Test 4', () => {
  expect(maxDistance("**********")).toEqual(10)
})

test('6#. It returns the max distance that can travel - Test 5', () => {
  expect(maxDistance("<<**>>")).toEqual(2)
})
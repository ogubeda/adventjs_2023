const manufacture = require('./index')

test('2#. Is array', () => {
  expect(typeof manufacture([1, 2, 3], '')).toBe('array')
})

test('2#. It finds the words that can be made - Test 1', () => {
  expect(manufacture(['tren', 'oso', 'pelota'], 'tronesa')).toBe(["tren", "oso"])
})

test('2#. It finds the words that can be made - Test 2', () => {
  expect(manufacture(['coche', 'muñeca', 'balon'], 'ocmuñalb')).toBe([])
})

test('2#. It finds the words that can be made - Test 3', () => {
  expect(manufacture(['patineta', 'robot', 'libro'], 'nopor')).toBe([])
})

test('2#. It finds the words that can be made - Test 4', () => {
  expect(manufacture([], 'letras')).toBe([])
})
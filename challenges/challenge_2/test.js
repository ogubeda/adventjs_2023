const manufacture = require('./index')

test('2#. Is array', () => {
  expect(manufacture([1, 2, 3], '')).toBeInstanceOf(Array)
})

test('2#. It finds the words that can be made - Test 1', () => {
  expect(manufacture(['tren', 'oso', 'pelota'], 'tronesa')).toEqual(["tren", "oso"])
})

test('2#. It finds the words that can be made - Test 2', () => {
  expect(manufacture(['coche', 'muñeca', 'balon'], 'ocmuñalb')).toEqual([])
})

test('2#. It finds the words that can be made - Test 3', () => {
  expect(manufacture(['patineta', 'robot', 'libro'], 'nopor')).toEqual([])
})

test('2#. It finds the words that can be made - Test 4', () => {
  expect(manufacture([], 'letras')).toEqual([])
})
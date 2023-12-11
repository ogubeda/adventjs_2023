const findNaughtyStep = require('./index')

test('3#. It finds the char modified - Test 1', () => {
  expect(findNaughtyStep('abcd', 'abcde')).toEqual('e')
})

test('3#. It finds the char modified - Test 2', () => {
  expect(findNaughtyStep('abcde', 'abcd')).toEqual('e')
})

test('3#. It finds the char modified - Test 3', () => {
  expect(findNaughtyStep('xxxx', 'xxoxx')).toEqual('o')
})

test('3#. It finds the char modified - Test 4', () => {
  expect(findNaughtyStep('stepfor', 'stepor')).toEqual('f')
})

test('3#. It finds the char modified - Test 5', () => {
  expect(findNaughtyStep('iiiii', 'iiiii')).toEqual('')
})
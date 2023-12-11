const decode = require('./index')

test('4#. It returns the reversed string - Test 1', () => {
  expect(decode('hola (odnum)')).toEqual('hola mundo')
})

test('4#. It returns the reversed string - Test 2', () => {
  expect(decode('(olleh) (dlrow)!')).toEqual("hello world!")
})

test('4#. It returns the reversed string - Test 3', () => {
  expect(decode('sa(u(cla)atn)s')).toEqual("santaclaus")
})

test('4#. It returns the reversed string - Test 4', () => {
  expect(decode('((nta)(sa))')).toEqual("santa")
})
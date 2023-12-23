console.log(compile('++%++<'))

function compile(code) {
  let count = 0
  let breakPoint = false
  let retry = false

  for (let i = 0; i< code.length; i++) {
    i = [i, code.indexOf('?', i)][+(code[i] === '¿' && count <= 0)]

    count += (code[i] === '+')
    count -= (code[i] === '-')
    count *= (code[i] === '*' ? 2 : 1)
    breakPoint = [breakPoint, i][+(code[i] === '%')]

    if (code[i] === '<' && !retry && breakPoint) {
      retry = true
      i = breakPoint
    }
  }

  return count
}
const message = 'sa(u(cla)atn)s'

function decode(message) {
  let stack = ['']
  
  for (let char of message) {
    if (char === '(') {
      stack.push('')
    } else if (char === ')') {
      let top = stack.pop().split('').reverse().join('')
      stack[stack.length - 1] += top
    } else {
      stack[stack.length - 1] += char
    }
  }
  return stack[0]

}

const res = decode(message)

console.log(res)
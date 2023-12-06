console.log(maxDistance('>>>*<<<<'))

function maxDistance(movements) {
  let distance = 0
  let plusDir = 0
  let minusDir = 0 

  for (const char of movements) {
    if (char === '>') plusDir++
    else if (char === '<') minusDir++
  }

  for (const char of movements) {
    if (char === '*') {
      if (plusDir < minusDir) distance--
      else distance++
    } else distance = char === '>' ? distance + 1 : distance - 1
  }

  return Math.abs(distance);
}
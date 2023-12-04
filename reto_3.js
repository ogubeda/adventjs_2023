const original = ''
const modified = 'aaa'


function findNaughtyStep(original, modified) {
  if (original === modified) return ''

  const maxLength =  Math.max(original.length, modified.length)

  for (let i = 0; i < maxLength; i++) {
    if (i >= original.length) return modified[i]
    else if (i >= modified.length) return original[i]

    if (original[i] !== modified[i]) {
      if (original[i + 1] === modified[i]) return original[i]
      return modified[i]
    }
  }

  return ''
}

const res = findNaughtyStep(original, modified)

console.log(res)
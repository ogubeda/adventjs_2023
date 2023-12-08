const original = ''
const modified = 'aaa'


function findNaughtyStep(original, modified) {
  let step = ''
  const maxLength = Math.max(original.length, modified.length)

  for (let i = 0; i < maxLength; i++) {
    if (i >= original.length) return modified[i]
    else if (i >= modified.length) return original[i]
    else if (original[i] === modified[i]) continue
    

    step = original[i + 1] === modified[i] ? original[i] : modified[i]
    break
  }

  return step
}

const res = findNaughtyStep(original, modified)

console.log(res)
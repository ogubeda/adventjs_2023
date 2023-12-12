function checkIsValidCopy(original, copy) {
  const validChars = ['#', '+', ':', '.', ' ']
  const lowerOriginal = original.toLowerCase()

  for (let i = 0; i < lowerOriginal.length; i++) {
    if (lowerOriginal[i] !== copy[i]) {
      if (lowerOriginal[i] === ' ') return false
      if (!validChars.includes(copy[i])) {
        return false
      }
    }
  }

  return true
}

console.log(checkIsValidCopy(
  'Santa Claus', 'sant##claus+'
))
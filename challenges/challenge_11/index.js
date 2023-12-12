function getIndexsForPalindrome(word) {
  if (word === word.split('').reverse().join('')) return []

  const wordArray = word.split('')
  const length = wordArray.length

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (i !== j && wordArray[i] !== wordArray[j]) {
        const temp = wordArray[i]
        wordArray[i] = wordArray[j]
        wordArray[j] = temp

        let isPalindrome = true
        for (let k = 0; k < length / 2; k++) {
          if (wordArray[k] !== wordArray[length - 1 - k]) {
            isPalindrome = false
            break
          }
        }

        if (isPalindrome) return [i, j]

        wordArray[j] = wordArray[i]
        wordArray[i] = temp
      }
    }
  }

  return null
}
console.log(getIndexsForPalindrome('aaababa'))
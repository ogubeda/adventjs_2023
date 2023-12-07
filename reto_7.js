function drawGift(size, symbol) {
  if (size === 1) return '#\n'
  
  let gift = ''
  const inner = size > 2 ? size - 2 : 0

  for (let i = 1; i < size; i++) {
    if (i === 1) {
      gift += ' '.repeat(size - i) + '#'.repeat(size) + '\n'
    } else {
      gift += ' '.repeat(size - i) + '#' + symbol.repeat(inner) + '#' + symbol.repeat(i - 2) + '#\n'
    }
  }

  gift += '#'.repeat(size) + symbol.repeat(inner) + '#\n';
  
  for (let i = size - 1; i >= 1; i--) {
    if (i === 1) {
      gift += '#'.repeat(size) + '\n'
    } else {
      gift += '#' + symbol.repeat(inner) + '#' + symbol.repeat(i - 2) + '#\n'
    }
  }

  return gift
}

console.log(drawGift(4, '*'))

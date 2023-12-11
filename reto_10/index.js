function createChristmasTree(ornaments, height) {
  let tree = ''
  let ornamentIndex = 0
  const middle = height - 1

  for (let i = 0; i < height; i++) {
    tree += ' '.repeat(height - i - 1)
  
    for (let j = 0; j <= i; j++) {
      tree += ornaments[ornamentIndex++ % ornaments.length]
      if (j < i) tree += ' '
    }

    tree += '\n'
  } 

  return tree + ' '.repeat(middle) + '|\n'
}

console.log(createChristmasTree("xo", 3))
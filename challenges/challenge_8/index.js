const result1 = organizeGifts(`76a11b`)
console.log(result1)

function organizeGifts(gifts) {
  let packageGifts = ''
  const regExp = /(\d+)([a-z])/g
  const blocks = Array.from(
    gifts.matchAll(regExp), m => ({ numbers: m[1], char: m[2] })
  )

  for (const block of blocks) {
    const { numbers, char } = block
    const blockCalc = numbers / 10
    let boxes = Math.trunc(blockCalc)
    let pales = Math.floor(boxes / 5)
    const others = Math.round((blockCalc - boxes) * 10)
    
    if (boxes >= 5) boxes = boxes % 5

    const boxesStr = `${'{' + char + '}'}`.repeat(boxes)
    const palesStr = `${'[' + char + ']'}`.repeat(pales)
    const othersStr = others > 0 ? `(${char.repeat(others)})` : ''

    packageGifts += palesStr + boxesStr + othersStr
  }

  return packageGifts
}
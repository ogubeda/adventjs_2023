const giftIds = [2, 1, 3, 5, 3, 2]

function findFirstRepeated(gifts) {
  const seenGiftIds = new Set()
    
  for (const giftId of gifts) {
    if (seenGiftIds.has(giftId)) return giftId
    seenGiftIds.add(giftId)
  }

  return -1
}
 

const res = findFirstRepeated(giftIds)

console.log(res)
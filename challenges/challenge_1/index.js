function findFirstRepeated(gifts) {
  const seenGiftIds = new Set()
    
  for (const giftId of gifts) {
    if (seenGiftIds.has(giftId)) return giftId
    seenGiftIds.add(giftId)
  }

  return -1
}
 
module.exports = findFirstRepeated
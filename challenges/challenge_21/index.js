function findBalancedSegment(message) {
  let count = 0
  let maxLen = 0
  let start = 0
  let countMap = new Map()

  countMap.set(0, -1)

  for (let i = 0; i < message.length; i++) {
      count += (message[i] == 0) ? -1 : 1

      if (countMap.has(count)) {
          if (maxLen < i - countMap.get(count)) {
              maxLen = i - countMap.get(count)
              start = countMap.get(count) + 1
          }
      } else {
          countMap.set(count, i)
      }
  }

  return maxLen > 0 ? [start, start + maxLen - 1] : []
}
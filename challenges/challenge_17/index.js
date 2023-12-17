const res = optimizeIntervals([
  [5, 8],
  [2, 7],
  [3, 4]
]) // [[2, 8]]

console.log(res)

function optimizeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  const fusedIntervals = [intervals[0]]

  for (let i = 1; i < intervals.length; i++) {
    const lastInterval = fusedIntervals[fusedIntervals.length - 1]
    const currentInterval = intervals[i]

    if (currentInterval[0] <= lastInterval[1]) {
      lastInterval[1] = Math.max(lastInterval[1], currentInterval[1])
    } else {
      fusedIntervals.push(currentInterval)
    }
  }

  return fusedIntervals
}
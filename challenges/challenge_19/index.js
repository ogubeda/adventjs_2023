const res = revealSabotage([
  ['*', ' ', ' ', ' '],
  [' ', ' ', '*', ' '],
  [' ', ' ', ' ', ' '],
  ['*', ' ', ' ', ' ']
])

console.log(res)

function revealSabotage(store) {
  const dx = [-1, -1, -1, 0, 0, 1, 1, 1]
  const dy = [-1, 0, 1, -1, 1, -1, 0, 1]

  return store.map((row, i) => 
    row.map((cell, j) => {
      if (cell === '*') return '*'

      let count = 0

      for (let k = 0; k < 8; k++) {
        const ni = i + dx[k]
        const nj = j + dy[k]
        const sLen = store.length
        const rLen = row.length

        if (ni >= 0 && ni < sLen && nj >= 0 
          && nj < rLen && store[ni][nj] === '*') {
          count++;
        }

      }
      return [ ' ', `${count}` ][ +(!!(count)) ]
    })
  )
}
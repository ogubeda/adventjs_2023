function autonomousDrive(store, movements) {
  function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1)
  }

  const limit = {
    x: store[0].length,
    y: store.length
  }
  let currentPosition = {
    x: 0,
    y: 0
  }

  for (let i = 0; i < store.length; i++) {
    const indexOfRobot = store[i].indexOf('!')
    if (indexOfRobot > -1) {
      currentPosition = {
        x: indexOfRobot,
        y: i
      }
      store[i] = replaceAt(store[i], indexOfRobot, '.')
      break
    }
  }

  const moves = {
    'R': {x: 1, y: 0},
    'L': {x: -1, y: 0},
    'U': {x: 0, y: -1},
    'D': {x: 0, y: 1}
  }

  for (const mov of movements) {
    const move = moves[mov]
    const newPosition = {
      x: currentPosition.x + move.x,
      y: currentPosition.y + move.y
    }

    if (newPosition.x >= 0 && newPosition.x < limit.x &&
        newPosition.y >= 0 && newPosition.y < limit.y &&
        store[newPosition.y][newPosition.x] !== '*') {
      currentPosition = newPosition
    }
  }

  store[currentPosition.y] = replaceAt(store[currentPosition.y], 
  currentPosition.x, '!')

  return store
}

const store = ['..!....', '...*.*.']

const movements = ['R', 'R', 'D', 'L']
const result = autonomousDrive(store, movements)
console.log(result)
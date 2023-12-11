function cyberReindeer(road, time) {
  const states = [road]
  const availablePaths = ['.', '*']
  let step = 0
  let lastStep = '.'

  for (let i = 1; i < time; i++) {
    let curr = states[states.length - 1]

    if (i === 5) curr = curr.replace(/\|/g, '*')

    const nextChar = curr[step + 1]
    
    if (availablePaths.includes(nextChar)) {
      curr = `${curr.slice(0, step)}${lastStep}S${curr.slice(step + 2)}`
      lastStep = nextChar;
      step++
    }

    states.push(curr)
  }

  return states
}

module.exports = cyberReindeer
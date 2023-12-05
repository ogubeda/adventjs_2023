const road = 'S..|...|..'
const time = 10 // unidades de tiempo


function cyberReindeer(road, time) {
  const states = [road]
  const availablePaths = ['.', '*']
  let step = 0
  let lastStep = '.'

  for (let i = 1; i < time; i++) {
    let curr = states[states.length - 1]

    if (curr[step] === '|') continue

    if (i === 5) curr = curr.replace(/\|/g, '*')

    if (availablePaths.includes(curr[step + 1])) {
      const nextStep = curr.charAt(step + 1);
      curr = `${curr.slice(0, step)}${lastStep}S${curr.slice(step + 2)}`
      lastStep = nextStep;
      step++
    }

    states.push(curr)
  }

  return states
}

const result = cyberReindeer(road, time)

console.log(result)
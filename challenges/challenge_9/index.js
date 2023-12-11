console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']))

function adjustLights(lights) {
  const result = [0, 0]
  let nextIsRed = false

  for (const light of lights) {
    const isWrong = nextIsRed ? light === '🟢' : light === '🔴'

    if(isWrong) result[0]++
    else result[1]++

    nextIsRed = !nextIsRed
  }
  
  return Math.min(...result)
}
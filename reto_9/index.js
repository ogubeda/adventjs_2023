console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']))

function adjustLights(lights) {
  let count = 0

  for (let i = 0; i < lights.length; i++) {
    if (lights[i] === '🟢' && lights[i + 1] === '🟢') {
      lights[i + 1] = '🔴'
      count++
    } else if (lights[i] === '🔴' && lights[i + 1] === '🔴') {
      lights[i + 1] = '🟢'
      count++
    }
  }

  return count
}
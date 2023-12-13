function calculateTime(deliveries) {
  const endHour = 25200
  let sumSeconds = 0

  for (const hour of deliveries) {
    const [hours, minutes, seconds] = hour.split(':').map(Number)
    sumSeconds += (hours) * 3600 + (minutes) * 60 + (seconds)
  }  

  let result = sumSeconds > endHour 
    ? sumSeconds - endHour : endHour - sumSeconds
  let isOverTime = endHour > sumSeconds

  let date = new Date(null)
  date.setSeconds(result)
  const finalDate = date.toISOString().substr(11, 8)
  
  return isOverTime ? `-${finalDate}` : finalDate
}


console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00']))
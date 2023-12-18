function findFirstRepeated(gifts) {
  const find = gifts.find((gift, i, self) => self.indexOf(gift) !== i)
  return [-1,find][+(!!(find))]
}

module.exports = findFirstRepeated
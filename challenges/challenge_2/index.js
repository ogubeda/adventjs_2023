function manufacture(gifts, materials) {
  const regex = new RegExp("^[" + materials + "]+$")
  return gifts.filter(gift => regex.test(gift))
}

module.exports = manufacture

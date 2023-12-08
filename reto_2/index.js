const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

function manufacture(gifts, materials) {
  const regex = new RegExp("^[" + materials + "]+$")
  return gifts.filter(gift => regex.test(gift))
}

const res = manufacture(gifts, materials)

console.log(res)
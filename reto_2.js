const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

function manufacture(gifts, materials) {
  return gifts.filter(gift => 
    gift.split("").every(char => materials.includes(char))
  )
}

const res = manufacture(gifts, materials)

console.log(res)
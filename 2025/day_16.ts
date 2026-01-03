type Gifts = number[]
type MaxWeight = number
type Result = number | null

function packGifts(gifts: Gifts, maxWeight: MaxWeight): Result {
  if (gifts.length === 0) {
    return 0
  }

  let sleighs = 1
  let currentWeight = 0

  for (const weight of gifts) {
    if (weight > maxWeight) {
      return null
    }

    if (currentWeight + weight <= maxWeight) {
      currentWeight += weight
    } else {
      sleighs++
      currentWeight = weight
    }
  }

  return sleighs
}

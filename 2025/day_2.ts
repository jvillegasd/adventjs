function manufactureGifts(
  giftsToProduce: Array<{ toy: string; quantity: number }>
): string[] {
  let gifts: string[] = []

  for (let gift of giftsToProduce) {
    if (gift.quantity <= 0) continue

    gifts = gifts.concat(Array.from({ length: gift.quantity }, () => gift.toy))
  }

  return gifts
}

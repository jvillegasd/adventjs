function drawGift(size: number, symbol: string): string {
  if (size < 2) return ''

  let box = ''
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i == 0 || i == size - 1 || j == 0 || j == size - 1) box += symbol
      else box += ' '
    }
    if (i != size - 1) box += '\n'
  }
  return box
}

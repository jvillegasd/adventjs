function findUnsafeGifts(warehouse: string[]): number {
  let counter = 0
  const m = warehouse.length
  const n = warehouse[0].length
  const movements = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ]

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (warehouse[i][j] !== '*') continue

      let isProtected = false
      for (const move of movements) {
        const newI = i + move[0]
        const newJ = j + move[1]

        if (newI < 0 || newI >= m || newJ < 0 || newJ >= n) continue

        if (warehouse[newI][newJ] === '#') {
          isProtected = true
          break
        }
      }

      if (!isProtected) counter++
    }
  }
  return counter
}

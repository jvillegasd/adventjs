function minStepsToDeliver(map: string[][]): number {
  let startI = 0
  let startJ = 0
  let foundGifts = 0
  let totalDist = 0
  let totalGifts = 0
  const movements = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ]
  const rows = map.length
  const cols = map[0].length

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === 'S') {
        startI = i
        startJ = j
      } else if (map[i][j] === 'G') {
        totalGifts++
      }
    }
  }

  if (totalGifts === 0) {
    return 0
  }

  const queue: [number, number, number][] = []
  const visited: boolean[][] = new Array(rows)
    .fill(false)
    .map(() => new Array(cols).fill(false))

  queue.push([startI, startJ, 0])
  visited[startI][startJ] = true

  while (queue.length > 0) {
    const [i, j, dist] = queue.shift()

    if (map[i][j] === 'G') {
      foundGifts++
      totalDist += dist
    }

    for (const [dr, dc] of movements) {
      const newI = i + dr
      const newJ = j + dc

      if (
        newI >= 0 &&
        newI < rows &&
        newJ >= 0 &&
        newJ < cols &&
        !visited[newI][newJ] &&
        map[newI][newJ] !== '#'
      ) {
        visited[newI][newJ] = true
        queue.push([newI, newJ, dist + 1])
      }
    }
  }

  return totalGifts === foundGifts ? totalDist : -1
}

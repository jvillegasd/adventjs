function canEscape(maze: string[][]): boolean {
  const movements = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ]
  const rows = maze.length
  const cols = maze[0].length

  const startI = maze.findIndex((row) => row.includes('S'))
  if (startI === -1) {
    return false
  }
  const startJ = maze[startI].findIndex((cell) => cell === 'S')

  const queue: [number, number][] = []
  const visited: boolean[][] = new Array(rows)
    .fill(false)
    .map(() => new Array(cols).fill(false))

  queue.push([startI, startJ])
  visited[startI][startJ] = true

  while (queue.length > 0) {
    const [i, j] = queue.shift()

    if (maze[i][j] === 'E') {
      return true
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
        maze[newI][newJ] !== '#'
      ) {
        visited[newI][newJ] = true
        queue.push([newI, newJ])
      }
    }
  }

  return false
}

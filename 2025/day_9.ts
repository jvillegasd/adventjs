type Board = string
type Moves = string
type Result = 'fail' | 'crash' | 'success'

function moveReno(board: Board, moves: Moves): Result {
  const board2D: string[][] = board
    .trim()
    .split('\n')
    .map((line) => line.split(''))
  const movements = {
    L: (i: number, j: number) => [i, j - 1],
    R: (i: number, j: number) => [i, j + 1],
    U: (i: number, j: number) => [i - 1, j],
    D: (i: number, j: number) => [i + 1, j]
  }
  const m = board2D.length
  const n = board2D[0].length

  // Find initial position
  let i = board2D.findIndex((row) => row.includes('@'))
  if (i === -1) {
    return 'fail'
  }

  let j = board2D[i].findIndex((cell) => cell === '@')

  // Check initial position
  if (board2D[i][j] === '*') {
    return 'success'
  }

  // Process moves
  for (const move of moves) {
    const [newI, newJ] = movements[move](i, j)

    const isInsideBoard = newI >= 0 && newI < m && newJ >= 0 && newJ < n
    if (!isInsideBoard || board2D[newI][newJ] === '#') {
      return 'crash'
    }

    i = newI
    j = newJ

    if (board2D[i][j] === '*') {
      return 'success'
    }
  }

  return 'fail'
}

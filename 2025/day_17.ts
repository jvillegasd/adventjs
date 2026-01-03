function hasFourLights(board: string[][]): boolean {
  let found = false

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === '.') {
        continue
      }

      // Horizontal check
      if (j + 3 < board[i].length) {
        found = true
        for (let k = 1; k <= 3; k++) {
          if (board[i][j + k] !== board[i][j]) {
            found = false
            break
          }
        }

        if (found) {
          return true
        }
      }

      // Vertical check
      if (i + 3 < board.length) {
        found = true
        for (let k = 1; k <= 3; k++) {
          if (board[i + k][j] !== board[i][j]) {
            found = false
            break
          }
        }

        if (found) {
          return true
        }
      }
    }
  }

  return false
}

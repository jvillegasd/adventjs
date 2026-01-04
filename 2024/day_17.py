def detect_bombs(grid: list[list[bool]]) -> list[list[int]]:
  mines = [[0 for _ in range(len(grid[0]))] for _ in range(len(grid))]

  moves = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1]
  ]

  for i in range(len(grid)):
    for j in range(len(grid[0])):
      for di, dj in moves:
        newI = i + di
        newJ = j + dj

        if (
          newI < 0 or
          newI >= len(grid) or
          newJ < 0 or
          newJ >= len(grid[0]) or
          grid[newI][newJ] is False
        ):
          continue
        
        mines[i][j] += 1

  return mines

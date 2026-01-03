from typing import List, Literal

def move_train(board: List[str], mov: Literal['U', 'D', 'R', 'L']) -> Literal['none', 'crash', 'eat']:
  row, col = None, None
  result = {
    '·': 'none',
    '*': 'eat',
    'o': 'crash',
    '@': 'crash'
  }

  for i in range(len(board)):
    if '@' in board[i]:
      row = i
      col = board[i].index('@')
      break

  movements = {
    'U': (row - 1, col),
    'D': (row + 1, col),
    'R': (row, col + 1),
    'L': (row, col - 1)
  }

  new_row, new_col = movements[mov]
  if new_row < 0 or new_row >= len(board) or new_col < 0 or new_col >= len(board[0]):
    return 'crash'

  return result[board[new_row][new_col]]

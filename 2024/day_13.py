def is_robot_back(moves: str) -> bool | list[int]:
  i = 0
  x, y = 0, 0
  processed = set()

  movements = {
    'L': lambda k, j: (k, j - 1),
    'R': lambda k, j: (k, j + 1),
    'U': lambda k, j: (k + 1, j),
    'D': lambda k, j: (k - 1, j)
  }
  invert = {
    'L': 'R',
    'R': 'L',
    'U': 'D',
    'D': 'U'
  }

  while i < len(moves):
    if moves[i] == '*' and i + 1 < len(moves):
      i += 1
      y, x = movements[moves[i]](y, x)
      y, x = movements[moves[i]](y, x)
      processed.add(moves[i])
    elif moves[i] == '!' and i + 1 < len(moves):
      i += 1
      m = invert[moves[i]]
      y, x = movements[m](y, x)
      processed.add(m)
    elif moves[i] == '?' and i + 1 < len(moves):
      i += 1
      if moves[i] not in processed:
        y, x = movements[moves[i]](y, x)
        processed.add(moves[i])
    elif moves[i] in movements:
      y, x = movements[moves[i]](y, x)
      processed.add(moves[i])

    i += 1

  return True if x == 0 and y == 0 else [x, y]

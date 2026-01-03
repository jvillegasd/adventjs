def create_xmas_tree(height, ornament):
  rows = []

  for i in range(len(height)):
    row_length = 2 * i + 1
    lines_length = height - 1 - i
    row = (
      '_' * lines_length
      + f'{ornament}' * row_length
      + '_' * lines_length
    )
    rows.append(row)

  lines_length = height - 1
  trunk = ('_' * lines_length + '#' + '_' * lines_length)
  rows.extend([trunk, trunk])

  return '\n'.join(rows)

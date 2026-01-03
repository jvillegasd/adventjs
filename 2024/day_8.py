def draw_race(indices, length):
  lanes = []
  n = len(indices)
  for i in range(n):
    leading_spaces = ' ' * (n - i - 1)
    path = ["~"] * length

    if indices[i] != 0:
      # Had to use this instead of direct indices[i] because website
      # didn't detect dynamic negative indexes (weird)
      path[(indices[i] + length) % length] = "r"

    lanes.append(
      leading_spaces
      + ''.join(path)
      + f" /{i + 1}"
    )

  return '\n'.join(lanes)

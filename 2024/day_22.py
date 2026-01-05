def generate_gift_sets(gifts):
  combinations = []

  def dfs(i: int, combination: list[str]):
    for j in range(i, len(gifts)):
      combination.append(gifts[j])
      combinations.append(combination.copy())
      dfs(j + 1, combination)
      combination.pop()

  dfs(0, [])

  return sorted(combinations, key=len)

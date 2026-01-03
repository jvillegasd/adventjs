def min_moves_to_stables(reindeer, stables):
  sums = 0
  reindeer.sort()
  stables.sort()

  for i in range(len(reindeer)):
    sums += abs(reindeer[i] - stables[i])

  return sums

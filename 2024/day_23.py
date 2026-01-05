def find_missing_numbers(nums):
  n = max(nums)
  values = [i + 1 for i in range(n)]

  c1 = set(values)
  c2 = set(nums)

  return list(c1.difference(c2))

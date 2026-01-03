def calculate_price(ornaments: str) -> int:
  operations = []
  costs = {
    "*": 1,
    "o": 5,
    "^": 10,
    "#": 50,
    "@": 100
  }

  for i in range(len(ornaments)):
    if ornaments[i] not in costs:
      return None

    if costs[ornaments[i]] < cost[ornaments[i + 1]]:
      operations.append(-1 * costs[ornaments[i]])
    else:
      operations.append(costs[ornaments[i]])

  return sum(operations)

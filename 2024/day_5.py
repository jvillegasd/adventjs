def organizeShoes(shoes):
  pairs = {}
  boots = []
  for shoe in shoes:
    if shoe["size"] not in pairs:
      pairs[shoe["size"]] = {
        "I": 0,
        "R": 0
      }
    
    pairs[shoe["size"]][shoe['type']] += 1

  for pair in pairs:
    min_pair = min(pairs[pair]["I"], pairs[pair]["R"])
    boots.extend([pair for i range(min_pair)])

  return boots

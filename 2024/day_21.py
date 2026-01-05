def tree_height(tree):
  if tree is None:
    return 0

  left = tree_height(tree["left"])
  right = tree_height(tree["right"])

  return max(left, right) + 1

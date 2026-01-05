def is_trees_synchronized(tree1, tree2):
  def are_mirror(a, b):
    if not a and not b:
      return True

    if not a or not b:
      return False

    if a["value"] != b["value"]:
      return False

    return (
      are_mirror(a["left"], b["right"]) and 
      are_mirror(a["right"], b["left"])
    )

  syncronized = are_mirror(tree1, tree2)

  return [syncronized, tree1["value"]]

import re

def in_box(box):
  # Pattern: starts with #, optional spaces, *, optional spaces, ends with #
  pattern = re.compile(r'^#\s*\*\s*#$')

  for i in range(1, len(box) - 1):
    line: str = box[i]
    if regex.search(string=line) is not None:
      return True
  
  return False

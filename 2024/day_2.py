def createFrame(names):
  output = ""
  max_len = len(max(names, key=len)) + 4

  output = "*" * max_len + "\n"
  for name in names:
    name_frame = f"* {name}"
    spaces = max_len - len(name_frame) - 1
    output += name_frame + " " * spaces + "*\n"

  output = "*" * max_len

  return output

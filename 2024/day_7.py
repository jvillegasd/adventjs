def fix_packages(packages):
  path = ""
  stack = []

  for letter in packages:
    if letter == "(":
      stack.append(path)
      path = ""
      continue

    if letter == ")":
      path = stack.pop() + reversed(path)
      continue

    path += letter

  return path

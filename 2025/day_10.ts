function maxDepth(s: string): number {
  let max = 0
  const stack: string[] = []

  for (const letter of s) {
    if (letter === '[') {
      stack.push(letter)
      if (stack.length > max) {
        max = stack.length
      }
    } else if (letter === ']') {
      if (stack.length === 0) {
        return -1
      }
      stack.pop()
    }
  }

  if (stack.length !== 0) {
    return -1
  }

  return max
}

type Factory = string[]
type Result = 'completed' | 'broken' | 'loop'

function runFactory(factory: Factory): Result {
  const m = factory.length
  const n = factory[0].length
  const movements = {
    '>': (i: number, j: number) => [i, j + 1],
    '<': (i: number, j: number) => [i, j - 1],
    '^': (i: number, j: number) => [i - 1, j],
    'v': (i: number, j: number) => [i + 1, j],
  }

  // Convert factory to mutable array of character arrays
  const mutableFactory = factory.map(row => row.split(''))

  let stack: Array<{i: number, j: number}> = []
  stack.push({i: 0, j: 0})

  while (stack.length) {
    const current = stack.pop()
    
    // Check if we're out of bounds
    if (current.i < 0 || current.i >= m || current.j < 0 || current.j >= n) {
      return 'broken'
    }
    
    const value = mutableFactory[current.i][current.j]

    if (value === '#') {
      return 'loop'
    } else if (value === '.') {
      return 'completed'
    }

    const [newI, newJ] = movements[value as keyof typeof movements](current.i, current.j)
    if (newI < 0 || newI >= m || newJ < 0 || newJ >= n) {
      return 'broken'
    }

    // Mark current position as visited
    mutableFactory[current.i][current.j] = '#'
    stack.push({i: newI, j: newJ})
  }

  return 'completed'
}
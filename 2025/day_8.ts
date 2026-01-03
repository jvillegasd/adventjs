function findUniqueToy(toy: string): string {
  const map: Record<string, number> = {}

  for (const letter of toy) {
    const lower = letter.toLowerCase()
    if (!(lower in map)) {
      map[lower] = 0
    }

    map[lower]++
  }

  for (const letter of toy) {
    const lower = letter.toLowerCase()
    if (map[lower] == 1) {
      return letter
    }
  }

  return ''
}
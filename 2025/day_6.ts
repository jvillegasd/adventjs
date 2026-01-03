type Glove = { hand: 'L' | 'R'; color: string }

function matchGloves(gloves: Glove[]): string[] {
  const map: Record<string, { L: number; R: number }> = {};
  let colors: string[] = [];

  for (let glove of gloves) {
    if (!(glove.color in map)) {
      map[glove.color] = {
        'L': 0,
        'R': 0
      }
    }

    map[glove.color][glove.hand]++
  }

  let minPair;
  for (let key in map) {
    minPair = Math.min(map[key]['L'], map[key]['R'])
    if (minPair === 0) continue

    for (let i = 0; i < minPair; i++) {
      colors.push(key)
    }
  }
  return colors;
}
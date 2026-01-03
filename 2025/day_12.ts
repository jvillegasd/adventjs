function elfBattle(elf1: string, elf2: string): number {
  let elf1Health = 3
  let elf2Health = 3
  const minMoves = Math.min(elf1.length, elf2.length)

  for (let i = 0; i < minMoves; i++) {
    if (elf1[i] === 'A') {
      if (elf2[i] !== 'B') {
        elf2Health--
      }
    } else if (elf1[i] === 'F') {
      elf2Health -= 2
    }

    if (elf2[i] === 'A') {
      if (elf1[i] !== 'B') {
        elf1Health--
      }
    } else if (elf2[i] === 'F') {
      elf1Health -= 2
    }

    if (elf1Health <= 0 && elf2Health <= 0) {
      return 0
    } else if (elf2Health <= 0) {
      return 1
    } else if (elf1Health <= 0) {
      return 2
    }
  }

  if (elf1Health === elf2Health) {
    return 0
  } else if (elf1Health > elf2Health) {
    return 1
  } else {
    return 2
  }
}

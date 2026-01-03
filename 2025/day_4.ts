function decodeSantaPin(code: string): string {
  function mod(a: number, b: number): number {
    return ((a % b) + b) % b
  }

  function parseBlocks(input: string) {
    // Extract blocks inside square brackets
    const blocks = input.match(/\[[^\]]*\]/g) || []

    return blocks.map((block) => {
      // Remove outer [ ]
      const inner = block.slice(1, -1)

      // Case 1: normal block: number + operations
      // Example: "1++" -> num=1, ops="++"
      // Case 2: special block without number: "<", ">", etc.
      const match = inner.match(/^(\d)?(.*)$/)

      const num = match?.[1] ? Number(match[1]) : null
      const ops = match?.[2] || ''

      return { num, ops }
    })
  }

  let pin = ''
  const MOD = 10
  const PIN_LENGTH = 4
  const operations = {
    '+': (a: number) => mod(a + 1, MOD),
    '-': (a: number) => mod(a - 1, MOD)
  }

  const blocks = parseBlocks(code)

  if (blocks[0].num === null || blocks.length === 0) return null

  for (let i = 0; i < blocks.length; i++) {
    let newValue = blocks[i].num
    for (let op of blocks[i].ops) {
      if (op === '<') {
        newValue = parseInt(pin[pin.length - 1])
        continue
      }

      newValue = operations[op](newValue)
    }
    pin += newValue
  }

  return pin.length >= PIN_LENGTH ? pin : null
}

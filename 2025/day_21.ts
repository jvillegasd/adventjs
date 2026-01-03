function clearGifts(warehouse: string[][], drops: number[]): string[][] {
  const hasFullRow = row => new Set(row).size <= 1;
  const removeRow = (row) => {
    const emptyRow = Array(warehouse[0].length).fill('.')
    warehouse.splice(row, 1)
    warehouse.unshift(emptyRow)
  }

  for (const col of drops) {
    for (let i = warehouse.length - 1; i >= 0; i--) {
      if (warehouse[i][col] === '.') {
        warehouse[i][col] = '#'
        if (hasFullRow(warehouse[i])) {
          removeRow(i)
        }
        break
      }
    }
  }
  return warehouse
}

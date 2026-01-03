type Data = Array<Record<string, string | number>>
type SortBy = string

function drawTable(data: Data, sortBy: SortBy): string {
  const sortedData = [...data].sort((a, b) => {
    const aVal = a[sortBy]
    const bVal = b[sortBy]

    if (typeof aVal === 'number' && typeof bVal === 'number') {
      return aVal - bVal
    }

    if (typeof aVal === 'string' && typeof bVal === 'string') {
      return aVal.localeCompare(bVal)
    }

    // Mixed types: numbers come before strings
    if (typeof aVal === 'number' && typeof bVal === 'string') {
      return -1
    }
    if (typeof aVal === 'string' && typeof bVal === 'number') {
      return 1
    }

    return 0
  })
  const lines: string[] = []
  const columns = Object.keys(sortedData[0])
  const columnWidths: number[] = []
  const columnHeaders = columns.map(
    (_, index) => String.fromCharCode(65 + index) // 65 is 'A' in ASCII
  )

  columns.forEach((col, index) => {
    let maxWidth = 1

    sortedData.forEach((row) => {
      const value = String(row[col] ?? '')
      if (value.length > maxWidth) {
        maxWidth = value.length
      }
    })
    columnWidths.push(maxWidth)
  })

  // Top border
  const separator =
    '+' + columnWidths.map((width) => '-'.repeat(width + 2)).join('+') + '+'
  lines.push(separator)

  // Header row
  const headerRow =
    '|' +
    columnHeaders
      .map((header, index) => ` ${header.padEnd(columnWidths[index])} `)
      .join('|') +
    '|'
  lines.push(headerRow)

  // Header separator
  lines.push(separator)

  // Data rows
  sortedData.forEach((row) => {
    const dataRow =
      '|' +
      columns
        .map((col, index) => {
          const value = String(row[col] ?? '')
          return ` ${value.padEnd(columnWidths[index])} `
        })
        .join('|') +
      '|'
    lines.push(dataRow)
  })

  // Bottom border
  lines.push(separator)

  return lines.join('\n')
}

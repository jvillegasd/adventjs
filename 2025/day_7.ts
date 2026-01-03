function drawTree(height: number, ornament: string, frequency: number): string {
  const lines: string[] = [];
  let position = 1;
  
  for (let i = 0; i < height; i++) {
    const leadingSpaces = height - 1 - i;
    const rowLength = 2 * i + 1;
    let row = ' '.repeat(leadingSpaces);
    
    for (let j = 0; j < rowLength; j++) {
      if (position % frequency === 0) {
        row += ornament;
      } else {
        row += '*';
      }
      position++;
    }
    
    lines.push(row);
  }
  
  lines.push(' '.repeat(height - 1) + '#');
  
  return lines.join('\n');
}
function execute(code: string): number {
  let cnt = 0;

  const runCode = (block: string): void => {
    let i = 0;
    while (i < block.length) {
      const curr = block[i];
      if (curr === '+') {
        cnt++;
      } else if (curr === '-') {
        cnt--;
      } else if (curr === '[') {
        const end = block.indexOf(']', i);
        const newCode = block.slice(i + 1, end);

        while (cnt !== 0) {
          runCode(newCode);
        }

        i = end;
      } else if (curr === '{') {
        if (cnt === 0) {
          i = block.indexOf('}', i);
        }
      }

      i++;
    }
  };

  code = code.replaceAll('>', '');
  runCode(code);

  return cnt;
}

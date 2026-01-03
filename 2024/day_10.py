from collections import defaultdict

def compile(instructions):
  i = 0
  registers = defaultdict(int)

  def execute(line: str):
    instruction, *args = line.split()
    assembler[instruction](*args)

  def mov(x: str, y: str):
    registers[y] = registers[x] if x.isalpha() else int(x)

  def inc(x: str):
    registers[x] += 1

  def dec(x: str):
    registers[x] -= 1

  def jmp(x: str, y: str):
    nonlocal i
    if registers.get(x, 0) == 0:
      i = int(y) - 1

  assembler = {
    'MOV': mov,
    'INC': inc,
    'DEC': dec,
    'JMP': jmp
  }

  while i < len(instructions):
    execute(instructions[i])
    i += 1

  return registers.get('A')

def execute(code: str) -> int:
  cnt = 0

  def run_code(block: str):
    nonlocal cnt

    i = 0
    while i < len(block):
      if block[i] == "+":
        cnt += 1
      elif block[i] == "-":
        cnt -= 1
      elif block[i] == "[":
        end = block.find("]", i)
        new_code = block[i + 1:end]

        while cnt != 0:
          run_code(new_code)

        i = end
      elif block[i] == "{":
        if cnt == 0:
          i = block.find("}", i)

      i += 1

  code = code.replace('>', '')
  run_code(code)

  return cnt

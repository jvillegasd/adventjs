from collections import defaultdict

def fix_gift_list(received: list[str], expected: list[str]) -> dict[str, int]:
  extra = {}
  missing = {}
  received_dict = defaultdict(int)
  expected_dict = defaultdict(int)

  for item in expected:
    expected_dict[item] += 1

  for item in received:
    received_dict[item] += 1

  for gift, cnt in expected_dict.items():
    received_cnt = received_dict.get(gift, 0)
    delta = received_cnt - cnt

    if received_cnt == 0:
      missing[gift] = cnt
    elif delta < 0:
      missing[gift] = -1 * delta
    elif delta > 0:
      extra[gift] = delta

  for gift, cnt in received_dict.items():
    if gift not in expected_dict:
      extra[gift] = cnt

  return {
      "missing": missing,
      "extra": extra
  }

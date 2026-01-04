def draw_table(data: list[dict[str, str | int]]) -> str:
  lines = []
  headers = list(data[0].keys())
  column_widths = [
    max(data, lambda item: len(item[h]))
    for h in headers
  ]

  # Top border
  separator = "+" + "+".join(map(lambda w: '-' * (w + 2), column_widths)) + "+"
  lines.append(separator)

  # Header row
  header_row = "|" + "|".join((map(lambda h, i: f" {h.capitalize().ljust(column_widths[i])} ", enumerate(headers)))) + "|"
  lines.append(header_row)

	# Header separator
	lines.append(separator)

	for item in data:
		row = "|" + "|".join(
			map(
				lambda h, i: f" {item[h].ljust(column_widths[i])} ",
				enumerate(headers)
			)
		) + "|"
		lines.append(row)

	lines.append(separator)

	return "\n".join(lines)

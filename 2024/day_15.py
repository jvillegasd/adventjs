def draw_table(data: list[dict[str, str | int]]) -> str:
    headers = list(data[0].keys())
    column_widths = [
        max(len(h), max(len(str(item[h])) for item in data))
        for h in headers
    ]

    separator = "+" + "+".join("-" * (w + 2) for w in column_widths) + "+"

    header_row = "|" + "|".join(
        f" {h.capitalize().ljust(w - 1)}"
        for h, w in zip(headers, column_widths)
    ) + "|"

    rows = []
    for item in data:
        row_content = "|".join(
            f" {str(item[h]).ljust(w)} "
            for h, w in zip(headers, column_widths)
        )
        rows.append(f"|{row_content}|")

    return "\n".join([separator, header_row, separator] + rows + [separator])

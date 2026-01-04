import re

def find_in_agenda(agenda: str, phone: str) -> dict | None:
    lines = agenda.split('\n')

    matches = [line for line in lines if phone in line]

    if len(matches) != 1:
        return None

    line = matches[0]

    name_match = re.search(r'<[A-Za-z\s]+>', line)
    name = name_match.group(0) if name_match else ""

    phone_match = re.search(r'\+\d{1,2}[-\d]+', line)
    found_phone = phone_match.group(0) if phone_match else ""

    address = line.replace(name, '').replace(found_phone, '').strip()
    name = name.replace('<', '').replace('>', '')

    return {"name": name, "address": address}

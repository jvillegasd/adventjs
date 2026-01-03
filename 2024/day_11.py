def decode_filename(filename: str) -> str:
  underscore_index = filename.find('_')
  filename_part = filename[underscore_index + 1:]
  last_dot_index = filename_part.rfind('.')

  if last_dot_index == -1:
    return filename_part

  return filename_part[:last_dot_index]

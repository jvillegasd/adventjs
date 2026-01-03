type ElfDateTime =
  `${number}*${number}*${number}@${number}|${number}|${number} NP`

function timeUntilTakeOff(
  fromTime: ElfDateTime,
  takeOffTime: ElfDateTime
): number {
  function parseElfDatetime(datetime: ElfDateTime): Date {
    const [date, time] = datetime.split('@')
    const [year, month, day] = date.split('*').map(Number)

    let [hours, minutes, seconds] = time.split('|')
    seconds = seconds.replace(' NP', '')

    return new Date(
      Date.UTC(
        year,
        Number(month) - 1, // JS months are 0-based!
        Number(day),
        Number(hours),
        Number(minutes),
        Number(seconds)
      )
    )
  }

  const fromTimeDT = parseElfDatetime(fromTime).getTime()
  const takeOffTimeDT = parseElfDatetime(takeOffTime).getTime()

  const diffMs = takeOffTimeDT - fromTimeDT

  // Convert to seconds and floor
  return Math.floor(diffMs / 1000)
}

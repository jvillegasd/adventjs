function filterGifts(gifts: string[]): string[] {
  // Code here
  return gifts.filter(item => item.includes("#") === false)
}

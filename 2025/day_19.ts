function revealSantaRoute(routes: string[][]): string[] {
  if (routes.length === 0) {
    return []
  }

  const routeMap = new Map<string, string>()
  for (const [origin, destination] of routes) {
    routeMap.set(origin, destination)
  }

  const finalRoute = [...routes[0]]

  while (true) {
    const currentLoc = finalRoute.at(-1)
    const nextLoc = routeMap.get(currentLoc)

    if (!nextLoc) {
      break
    }

    finalRoute.push(nextLoc)
  }

  return finalRoute
}

// I had to do it in TypeScript because python compiler adds an extra value (Thats a bug in AdventJS)
function distributeWeight(weight: number): string {
    const boxesStr: Record<number, string[]> = {
        1: [" _ ", "|_|"],
        2: [" ___ ", "|___|"],
        5: [" _____ ", "|     |", "|_____|"],
        10: [" _________ ", "|         |", "|_________|"]
    }

    const padWidth: Record<number, number> = { 2: 4, 5: 6, 10: 10 }

    // Build stack using greedy (smallest first)
    let stack: number[] = []
    let rest = weight
    for (const box of [10, 5, 2, 1]) {
        const count = Math.floor(rest / box)
        rest = rest % box
        stack = Array(count).fill(box).concat(stack)
    }

    // Build result lines
    const lines: string[] = []
    for (let i = 0; i < stack.length; i++) {
        const current = stack[i]
        const box = [...boxesStr[current]]
        const nextBox = stack[i + 1] ?? null

        if (nextBox && current < nextBox) {
            box[box.length - 1] = box[box.length - 1].padEnd(padWidth[nextBox], '_')
        }

        lines.push(...(i === 0 ? box : box.slice(1)))
    }

    return lines.join('\n')
}

export function formatNumber(num: number) {
    if (num < 1000) return num.toString()
    return (num / 1000).toFixed(1) + 'k'
}

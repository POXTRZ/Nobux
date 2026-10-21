const colors = {
  inkOnCream: ['#1B1F23', '#FAF7F2'], mutedOnCream: ['#5B625C', '#FAF7F2'],
  forestOnCream: ['#1F6F54', '#FAF7F2'], coralDeepOnWhite: ['#C9431F', '#FFFFFF'],
  whiteOnDeep: ['#FFFFFF', '#123D30'], salmonOnDeep: ['#F6A18E', '#123D30'],
  mutedOnWhite: ['#5B625C', '#FFFFFF'],
}
function luminance(hex) { const channels = hex.slice(1).match(/../g)?.map(value => Number.parseInt(value, 16) / 255) ?? []; return channels.map(value => value <= .03928 ? value / 12.92 : ((value + .055) / 1.055) ** 2.4).reduce((sum, value, index) => sum + value * [0.2126, 0.7152, 0.0722][index], 0) }
function ratio(pair) { const [first, second] = pair.map(luminance); return (Math.max(first, second) + .05) / (Math.min(first, second) + .05) }
console.table(Object.fromEntries(Object.entries(colors).map(([name, pair]) => [name, { foreground: pair[0], background: pair[1], ratio: ratio(pair).toFixed(2), aa: ratio(pair) >= 4.5 ? 'PASA' : 'FALLA' } ])))

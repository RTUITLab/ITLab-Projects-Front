export const getHSLfromString = (str, alpha, opts) => {
  let h, s, l
  opts = opts || {}
  opts.hue = opts.hue || [0, 360]
  opts.sat = opts.sat || [75, 100]
  opts.lit = opts.lit || [40, 60]

  let range = function (hash, min, max) {
    var diff = max - min
    var x = ((hash % diff) + diff) % diff
    return x + min
  }

  let hash = 0
  if (str.length === 0) return hash
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
    hash = hash & hash
  }

  h = range(hash, opts.hue[0], opts.hue[1])
  s = range(hash, opts.sat[0], opts.sat[1])
  l = range(hash, opts.lit[0], opts.lit[1])

  if (alpha) return `hsla(${h}, ${s}%, ${l}%, ${alpha})`
  else return `hsl(${h}, ${s}%, ${l}%)`
}

const fibonacci = (n) => {
  if (n === 1) {
    return [1]
  }
  if (n === 2) {
    return [1, 1]
  }
  const serie = [1, 1]
  for (let i = 2; i < n; i++) {
    serie.push(serie[i - 1] + serie[i - 2])
  }
  return serie
}

module.exports = fibonacci
const factorial = (number) => {
  let count = number
  let result = 1
  for(let i = 0; i < number; i++) {
    result = result * count
    count = count - 1
  }

  return result
}

module.exports = factorial;
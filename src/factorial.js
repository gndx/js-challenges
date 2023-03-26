const factorial = (number, r=1) => {
  if (number <= 1) return r;

  return factorial(number - 1, r * number);
}

module.exports = factorial;
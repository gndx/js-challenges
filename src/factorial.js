let result = 1;
const factorial = (number) => {

  for (let i = 2; i <= number; i++) {
    result *= i;
  }
  return result;
}

module.exports = factorial;
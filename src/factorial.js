const factorial = (number) => {
  if (number < 0) {
    return undefined;
  }
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result *= i;
  }
  return result;
};

// console.log(factorial(5)); // 120
// console.log(factorial(9)); // 362880
// console.log(factorial(15)); // 1307674368000

module.exports = factorial;
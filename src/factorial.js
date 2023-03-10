const factorial = (num) => {
  // your code here
  if (num < 0) {
    return undefined; // Factorial is undefined for negative numbers
  } else if (num === 0 || num === 1) {
    return 1; // Factorial of 0 is 1
  } else {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }
}

module.exports = factorial;
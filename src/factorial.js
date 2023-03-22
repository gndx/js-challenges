const factorial = (number) => {
  // your code here
  const result = (n) => n == 0 ? 1 : n*result(n-1);
  return result(number);
}

module.exports = factorial;
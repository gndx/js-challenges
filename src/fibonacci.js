const fibonacci = (n) => {
  if (typeof n !== "number") return console.error(`${n} is not of type number❗`);

  if (n == 1) return [1];

  const fib = [1, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

module.exports = fibonacci;
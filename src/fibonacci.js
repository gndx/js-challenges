const fibonacci = (n) => {
  if (n == 1) return [1];   
  if (n == 2) return [1, 1]; 

  var fib = fibonacci(n - 1);
  fib.push(fib[n - 2] + fib[n - 3]);
  return fib;
}

module.exports = fibonacci;
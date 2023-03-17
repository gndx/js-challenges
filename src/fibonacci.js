const fibonacci = (n) => {
  let fib = [1, 1]; 
    if (n == 1) { fib =[1]; }
    if (n <= 2) { return fib.slice(0, n); }
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2]; 
    }
    return fib;
}
module.exports = fibonacci;

const fibonacci = (n) => {
  let a = 0, b = 1, c = n;
  let f = [1];
  if (n <= 1) return f;
  for(let i = 1; i < n; i++) {
    c = a + b;
    a = b;
    b = c;
    f.push(c);
  }
  return f;
}

module.exports = fibonacci;
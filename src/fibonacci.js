const fibonacci = (n) => {
  let fibonacci = [0, 1];
  while (fibonacci.length <= n) {
    let lastItem = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        fibonacci.push(lastItem);
  }
  fibonacci.shift()
  return fibonacci;
}

module.exports = fibonacci;
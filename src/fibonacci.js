const fibonacci = (n) => {
  if (n === 1) {
    return [1];
  }
  const result = [1, 1];
  for (let i = 2; i < n; i++) {
    const a = result[i - 1];
    const b = result[i - 2];
    result.push(a + b);
  }
  return result;
};

// console.log(fibonacci(5)); // [0, 1, 1, 2, 3, 5]
// console.log(fibonacci(9)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// console.log(fibonacci(15)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610]

module.exports = fibonacci;

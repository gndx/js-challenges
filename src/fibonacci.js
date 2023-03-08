const fibonacci = (n) => {
  let result = [0, 1];

  for (let index = 2; index <= n; index++) {
    result[index] = result[index - 2] + result[index - 1];
  }

  result.shift();
  return result;
};

module.exports = fibonacci;

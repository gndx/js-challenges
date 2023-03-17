const fibonacci = (n) => {
  if (n==1) {
    return [1]
  }
  const fibArray = [1, 1];
  for (let i = 2; i < n; i++) {
    fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
  }
  return fibArray;
}

module.exports = fibonacci;
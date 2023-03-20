const fibonacci = (n) => {
  let res = [0, 1];
  let i = 2;
  while (i <= n) {
    res.push(res[i - 2] + res[i - 1]);
    i++;
  }
  return res.slice(1);
};

module.exports = fibonacci;

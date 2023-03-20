const factorial = (number) => {
  let res = 1;
  while (number) {
    res = res * number;
    number--;
  }
  return res;
};

module.exports = factorial;

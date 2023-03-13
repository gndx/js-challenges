const fibonacci = (n) => {
  if (n <= 0 || !Number.isInteger(n)) {
    throw new Error("n must be a valid integer greater than 0");
  }

  const seq = [];
  let n1 = 0;
  let n2 = 1;
  let tmp;

  while (n--) {
    seq.push(n1 + n2);
    tmp = n1;
    n1 += n2;
    n2 = tmp;
  }

  return seq;
};

module.exports = fibonacci;

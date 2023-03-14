const fibonacci = (n) => {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error(
      `n must be a valid integer greater than or equal to 0; got ${n}`
    );
  }

  const seq = [];
  let n1 = 0, n2 = 1, tmp;

  while (n--) {
    seq.push(n1 + n2);
    tmp = n1;
    n1 += n2;
    n2 = tmp;
  }

  return seq;
};

module.exports = fibonacci;

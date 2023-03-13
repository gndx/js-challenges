const factorial = (number) => {
  if (!Number.isInteger(number)) {
    throw new Error("number must be a valid integer");
  }

  let aggMult = 1;

  while (number) aggMult *= number--;

  return aggMult;
};

module.exports = factorial;

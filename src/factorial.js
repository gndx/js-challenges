const factorial = (number) => {
  if (!Number.isInteger(number) || number < 0) {
    throw new Error(
      `number must be a valid integer greater than or equal to 0; got ${number}`
    );
  }

  let aggMult = 1;

  while (number > 1) aggMult *= number--;

  return aggMult;
};

module.exports = factorial;

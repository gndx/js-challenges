const factorial = (number) => {
  if (typeof number !== "number") return console.error(`${number} is not of type number❗`);

  let element = 1;
  for (let i = number; i >= 1; i--) {
    element *= i
  }
  return element;
}

module.exports = factorial;
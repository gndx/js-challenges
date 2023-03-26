const trialDivision = (number) => {
  if (number == 2) return true;
  if (number <= 1 || number%2 == 0) return false;

  for (let i = 3; i <= Math.ceil(Math.sqrt(number)); i += 2) {
    if (number % i == 0) return false;
  }

  return true;
}

module.exports = trialDivision;
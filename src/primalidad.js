const trialDivision = (number) => {
  if (number <= 1 || !Number.isInteger(number)) {
    return false;
  }

  for (let index = 2; index <= number / 2; index++) {
    if (number % index === 0) {
      return false;
    }
  }

  return true;
};

module.exports = trialDivision;

const trialDivision = (number) => {
  if (number <= 1 || number % 1 !== 0) return false;
  let i = 2;
  while (i < number) {
    if (number % i === 0) {
      return false;
    }
    i++;
  }
  return true;
};

module.exports = trialDivision;

const trialDivision = (number) => {
  if (!Number.isInteger(number) || number < 2) {
    return false;
  }
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

// console.log(trialDivision(5)); // true
// console.log(trialDivision(9)); // false
// console.log(trialDivision(15)); // false

module.exports = trialDivision;
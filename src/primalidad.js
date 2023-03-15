const trialDivision = (number) => {
  // your code here

  if (number < 2 || !Number.isInteger(number)) {
    return false;
  }
  let raizNumber = Math.sqrt(number);
  for (let i = 2; i <= raizNumber; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(trialDivision(79));

module.exports = trialDivision;

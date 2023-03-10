const trialDivision = (number) => {
  if (number < 2) {
    return false;
  }

  if (number % 1 !== 0)
  {
    return false
  }
  
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

module.exports = trialDivision;
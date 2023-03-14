const trialDivision = (number) => {
  if (Number.isInteger(number)) {
    if (number <= 1) return false; //1 and 0 are not prime
    if (number == 2 || number == 3) return true; // 2 and 3 are prime
    if (number % 2 == 0 || number % 3 == 0) return false;
    for (var i = 5; i <= Math.sqrt(number); i = i + 6)
      if (number % i == 0 || number % (i + 2) == 0) return false;
    return true;
  }
  return false;
};

module.exports = trialDivision;

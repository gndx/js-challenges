const trialDivision = (number) => {
  if (number % 1 !== 0) return false; // Check for floats
  if (number <= 1) return false;
  if (number === 2) return true;
  if (number % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) return false;
  }
  return true;
};

module.exports = trialDivision;

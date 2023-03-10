const trialDivision = (number) => {
  // your code here
  number = Math.floor(number);
  
   if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
  
};

module.exports = trialDivision;
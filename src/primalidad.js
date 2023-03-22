const trialDivision = (number) => {
  if (number <= 0 || Number.isInteger(number) === false) {
    return false;
  }
  else if (number === 1) {
    return false;
  }else if (number === 2) {
    return true;
  }else{
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
}

console.log(trialDivision(0.5));

module.exports = trialDivision;
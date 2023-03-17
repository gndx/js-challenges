const trialDivision = (number) => {
  if(!Number.isInteger(number)){
    return false;
  }
  if (number<=0){
    return false;
  }
  if (number === 1) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

module.exports = trialDivision;
const trialDivision = (number) => { 
  let num = parseInt(number);
  if (isNaN(num)) {
    return false;
  }else {
    if (num === 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  }
}

module.exports = trialDivision;
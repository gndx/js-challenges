const trialDivision = (number) => {
  // your code here

  if (number <= 1) {
    return false;

  } else if (number == 2 || number == 3) {
    return true;

  } else if (number % 2 == 0) {
    return false;

  } else if (number % 1 !== 0) {
    return false;
  }

  for (let k = 3; k <= (number)**(1/2); k+=2) {
    if (number % k == 0) {
      return false;
    }
    
  }

  return true;

}

module.exports = trialDivision;
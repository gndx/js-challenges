const trialDivision = (number) => {

  let n = number;
  let cont = 0;
  
  if (number < 2) {
    return false;
  } else {
    for (let i = 1; i <= number; i++) {
      if ((n % i) === 0) {
        cont += 1;
      }
      //Break loop for
      if (cont > 2) {
        break;
      }
    }

    if (cont === 2) {
      return true;
    } else {
      return false;
    }

  }  
}

module.exports = trialDivision;
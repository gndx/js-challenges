const trialDivision = (number) => {
  // check number
  if(parseInt(number) < 2) return false;
  if(parseInt(number) == 2) return true;
  // if number is greater than 2, check primality
  for(let i = 2 ; i < parseInt(number) ; ++i) {
    if(parseInt(number) % i == 0) return false;
  }
  return true;
}

module.exports = trialDivision;
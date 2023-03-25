const trialDivision = (number) => {
  for (let i =2; i< Math.trunc(number); i++){
    if ((number  % i === 0 ) )
      return false;
  }

  if ((number < 2 ) ||  (number % 1 != 0) )
    return false 
  else
    return true;
}

module.exports = trialDivision;

const trialDivision = (number) => {
  const root = Math.sqrt(number);

  if (!Number.isInteger(number) || number < 2) return false;

  for (let i = 2; i <= root; i++) {
    if(number % i === 0 ) return false;
  } 
  
  return true;
}

module.exports = trialDivision;
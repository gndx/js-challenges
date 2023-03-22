const trialDivision = (number) => {
  // your code here
  if(Math.floor(number)-number)return false
  for(let i=2;i<=Math.sqrt(number);i++){
      if(number%i===0) return false;
  }
  return number>1;
}

module.exports = trialDivision;
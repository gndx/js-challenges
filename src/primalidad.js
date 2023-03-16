const trialDivision = (number) => {
  // your code here
  if (number< 2) {
    return 2
  }
  for (let i=2;i<number;i++){
    if(number % i == 0) {
      return false
    }}
  return true
}

module.exports = trialDivision;

const trialDivision = (number) => {
  if (Math.abs(number) === 1 || number === 0 || !Number.isInteger(number)) {
    return false
  }
  for(let i = 2; i < number; i++) {
    if(number % i === 0) {
      return false
    }
  }
  return true
}

module.exports = trialDivision
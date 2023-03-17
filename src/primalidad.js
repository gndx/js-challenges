const trialDivision = (number) => {
  if(number > 1 && Number.isInteger(number)) {
    for(let i = 2; i<number; i++) {
      if(number % i == 0){
        return false
      }
    }
    return true
  }else{
    return false
  }
}

module.exports = trialDivision;

const trialDivision = (number) => {
var flotante = String(number);
if(flotante.includes(".")) {
  return false;
} else {
    if (number < 2) {
      return false;
    }

    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
}
  console.log(trialDivision(4));

module.exports = trialDivision;
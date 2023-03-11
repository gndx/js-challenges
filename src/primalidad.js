const trialDivision = (number) => {  
  var es_numero_real;
  es_numero_real = !(Number.isInteger(number));
  if (es_numero_real == true) {
    number=Math.floor(number);
  }
  if (number <= 1) {
    return false;
  }
  if (number === 2 || number === 3) {
    return true;
  }
  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }
  for (let i = 5; i <= Math.sqrt(number); i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

module.exports = trialDivision;
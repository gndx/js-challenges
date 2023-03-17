const trialDivision = (number) => {
  // Excepcion para <=1 y float
  if((number <= 1) || (number%1 !== 0)){
    return false;
  }

  // Probar para (n/2)+1 no tiene sentido.
  if(number == 2){
    return true;
  }

  var esPrimo = true;
  var n = Math.floor(number/2)

  while(n>1){
    if(number%n == 0){
      esPrimo = false;
      break;
    }
    n--;
  }

  return esPrimo
  // \_0>
}

module.exports = trialDivision;
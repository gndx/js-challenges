const trialDivision = (number) => {
  // your code here
  // el if ve si el numero es < 2 o si no es un numero entero, por eso el isinteger
  if (number < 2 || !Number.isInteger(number)) {
    return false;
  };
  // este for itera desde el 2 hasta la raiz cuadrada del numero, por eso el usoo de sqrt
  for (let i = 2; i <= Math.sqrt(number); i++) {
    // Si el resto es 0 = no primo, retorna false
    if (number % i === 0) {
      return false;
    }
  };
  // si el resto es != 0 el numero es primo
  return true;
};

module.exports = trialDivision;
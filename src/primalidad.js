const trialDivision = (number) => {
  // your code here
  if(number < 2 || number == 4 || number != Math.floor(number)) { // Con nuestra primera condición descartamos todos los valores inferiores a 2, si es igual a 4, y si el numero es un valor flotante.
    return false;
  }
  else {  // Con nuestra segunda condición hacemos un ciclo desde el valor 2 hasta la mitad del número ingresado, ya que así podremos recorrer todos los valores que pueden validar la primalidad del número, y en caso que ninguno sea válido, sale del ciclo retornando la confirmación de la primalidad.
    for (let i = 2; i < number/2; i++) {
      if (number % i == 0 ) return false;
    }
    return true;
  }
}

module.exports = trialDivision;
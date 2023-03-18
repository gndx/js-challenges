const factorial = (number) => {
  // your code here
  let result = number;
  if (number < 0) { // Con nuestra primera condición descartamos todos los valores negativos.
    return -1;
  }
  else if (number == 0) { // Con nuestra segunda condición mandamos la respuesta para el primer caso factorial(0).
    return 1;
  }
  else {  // Con nuestra última condición realizamos la multiplicación del valor original con los valores inferiores, reduciendo la variable original hasta llegar a 1 que es cuando obtendriamos la respuesta correcta.
    while (number != 1) {
      number--;
      result *= number;
    }
    return result;
  }
}

module.exports = factorial;
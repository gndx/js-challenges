const factorial = (numero) => {
  if(numero < 0) {
    return NaN;
  }

  let resultado = 1;

  for (let i = 2; i <= numero; i++) {
    resultado *= i;
  }
  
  return resultado;
}

module.exports = factorial;
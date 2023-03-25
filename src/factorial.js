const factorial = (number) => {
  let salida = 1;
  for(let i=1; i<=number; i++){
    salida *= i;
  }
  return salida;
}

module.exports = factorial;

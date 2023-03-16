const trialDivision = (numero) => {
  // your code here
  if (numero < 2) {
    return false;
  }

  const numeros = Array.from({ length: numero - 1 }, (_, index) => index + 2);

  const limite = Math.sqrt(numero);
  for (let i = 2; i <= limite; i++) {
    if (numeros.includes(i)) {
      for (let j = i * i; j <= numero; j += i) {
        const index = numeros.indexOf(j);
        if (index !== -1) {
          numeros.splice(index, 1);
        }
      }
    }
  }

  return numeros.includes(numero);
}



module.exports = trialDivision;
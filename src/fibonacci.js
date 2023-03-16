const fibonacci = (numero) => {
  // your code here
  if (numero <= 0) return [];
  if (numero === 1) return [1];
  if (numero === 2) return [1, 1];

  const secuencia = [1, 1];

  for (let i = 2; i < numero; i++) {
    secuencia.push(secuencia[i - 2] + secuencia[i - 1]);
  }
  return secuencia;

}

module.exports = fibonacci;
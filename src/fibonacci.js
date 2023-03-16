const fibonacci = (n) => {
  let secuencia = [1, 1];
  if (n <= 0) {
    return [];
  }
  if (n === 1) {
    return [1];
  }
  for (let i = 2; i < n; i++) {
    secuencia[i] = secuencia[i - 1] + secuencia[i - 2];
  }
  return secuencia;
};

module.exports = fibonacci;
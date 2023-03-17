const fibonacci = (n) => {
  // your code here
  // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
  // Ver si el numero es 1 para retornar 1
  if (n === 1) {
    return [1];
    // Si son 2 numeros debe retornar los elemetos en el arreglo = 1, 1
  } else if (n === 2) {
    return [1, 1]; 
  } else {
    // En listaSecuencia se guardan los primeros numeros de la secuencia
    const listaSecuencia = [1, 1];
    for (let i = 2; i < n; i++) {
      // Gracias al for en siguienteSucesion se calcula el siguiente número en la secuencia de Fibonacci 
      // al sumar los dos números anteriores en la lista 
      // Y el metodo push los agrega en el arreglo listaSecuencia
      const siguienteSucesion = listaSecuencia[i - 1] + listaSecuencia[i - 2];
      listaSecuencia.push(siguienteSucesion);
    };
    return listaSecuencia;
  };
};

module.exports = fibonacci;
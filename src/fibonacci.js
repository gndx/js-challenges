const fibonacci = (n) => {
  // your code here
  if (n < 1) { // Con nuestra primera condición descartamos todos los valores negativos y 0.
    return -1;
  }
  else {  // Con nuetra última condición declaramos un arreglo con los valores iniciales y un arreglo con nuestro primer escenario fibonacci(1), para luego hacer un ciclo que recorre desde 2 hasta el valor del número ingresado, realizando la suma del valor fibonacci actual y el anterior, para guardarlo en la posición actual del arreglo y hacer un push para guardar el resultado en el arreglo final que será retornado al terminar el ciclo.
    let arr = [0, 1];
    let result = [1];
    for(let i = 2; i <= n; i++) {
      arr[i] = arr[i-2] + arr[i -1]
      result.push(arr[i]);
    }
    return result;
  }
}

module.exports = fibonacci;
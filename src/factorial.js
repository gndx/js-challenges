const factorial = (number) => {
  // your code here
  //Ver si el numero es 0 o 1 para devolver 1
  // 0! = 1
  // 1! = 1
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return factorial(number - 1) * number; //recursividad
  }
};

module.exports = factorial;
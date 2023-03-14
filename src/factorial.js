const factorial = (number) => {
  //less than 0
  if (number < 0) return -1;
  //equals to 0
  else if (number == 0) return 1;
  //recursive factorial call
  else {
    return number * factorial(number - 1);
  }
}

module.exports = factorial;
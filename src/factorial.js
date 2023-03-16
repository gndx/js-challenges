const factorial = (number) => {
  if (number == 0 || number == 1){
    return 1;
  } else if (number > 1 ) {
    for (var i = number - 1; i >= 1; i--) {
      number *= i;
    }
    return number;
  } else {
    return undefined;
  }
}

module.exports = factorial;
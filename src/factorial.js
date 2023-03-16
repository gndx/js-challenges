const factorial = (number) => {
  let num = parseInt(number);
  if (isNaN(num)) {
    return;
  }else {
    if (num === 0 || num === 1) return 1; 
    else return num * factorial(num - 1);
  }
}

module.exports = factorial;
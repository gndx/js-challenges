const factorial = (number) => {
  
  if (number < 0) {
    return 0; // FACTORIAL IS ONLY FOR NATURAL NUMBERS.
  } else if ((number === 0) || (number === 1)) {
    return 1;
  } else {
    return number * factorial (number - 1); 
  }


}

module.exports = factorial;
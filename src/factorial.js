const factorial = (number) => {
  //numbar = max
  // numeber = 0 ; res = 1

  let res = 1
  for (let index = 1; index <= number; index++) {
    res = res * index;
  }
  return res

}

module.exports = factorial;
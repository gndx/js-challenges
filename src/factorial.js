const factorial = (number) => {
  let arr = []
  for(i=1; i<number+1; i++){
    arr.push(i)
  }
  return arr.reduce((acc, cur) => acc * cur, 1)
}

module.exports = factorial;
const factorial = (number) => {
  // 0 factorial equals 1 because its next integer is 1.
  if(number == 0)
    return 1;
  // we iterate on its integer parts
  for(let i = number - 1 ; i >= 1 ; --i){
    number *= i;
  }
  // result
  return number
}
module.exports = factorial;
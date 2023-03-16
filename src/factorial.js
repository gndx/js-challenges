const factorial = (number) => {
  // your code here
  if(number <= 1){
    return 1
  }
  else {
    return number*factorial(n-1)
}

module.exports = factorial;

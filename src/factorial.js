const factorial = (number) => {
  // your code here
  let aux = 1

  while(number >=1){
    aux *= number;
    number--;
  }
  return aux;
}

module.exports = factorial;